import React, { useCallback, useEffect, useRef, useState } from "react";
import { Chip } from "..";
import styles from "./CustomCarousel.module.css";

const SPEED = 40; // pixels per second
const RESUME_DELAY = 1500; // ms after the last interaction before the loop resumes
const DRAG_THRESHOLD = 4; // px of movement before a press counts as a drag

function CustomCarousel({ titles }) {
	const containerRef = useRef(null);
	const setRef = useRef(null);
	const posRef = useRef(0);
	const stoppedRef = useRef(false); // toggled by click
	const pausedRef = useRef(false); // temporary, during interaction
	const pressedRef = useRef(false);
	const movedRef = useRef(false);
	const resumeTimerRef = useRef(null);
	const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });

	const [isOverflowing, setIsOverflowing] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const hasTitles = Array.isArray(titles) && titles.length > 0;

	const wrap = useCallback((value) => {
		const setWidth = setRef.current?.offsetWidth || 0;
		if (!setWidth) return value;
		return ((value % setWidth) + setWidth) % setWidth;
	}, []);

	useEffect(() => {
		const container = containerRef.current;
		const set = setRef.current;
		if (!container || !set) return undefined;

		const check = () => {
			const overflowing = set.scrollWidth - 8 > container.clientWidth;
			setIsOverflowing(overflowing);
			if (!overflowing) {
				posRef.current = 0;
				container.scrollLeft = 0;
			}
		};

		check();
		const observer = new ResizeObserver(check);
		observer.observe(container);
		observer.observe(set);
		return () => observer.disconnect();
	}, [titles]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container || !isOverflowing) return undefined;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

		let frameId;
		let last = performance.now();

		const tick = (now) => {
			const dt = (now - last) / 1000;
			last = now;
			if (!stoppedRef.current && !pausedRef.current) {
				posRef.current = wrap(posRef.current + SPEED * dt);
				container.scrollLeft = posRef.current;
			}
			frameId = requestAnimationFrame(tick);
		};

		frameId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameId);
	}, [isOverflowing, wrap]);

	// Clear pending timer on unmount
	useEffect(() => () => clearTimeout(resumeTimerRef.current), []);

	const pause = () => {
		clearTimeout(resumeTimerRef.current);
		pausedRef.current = true;
	};

	// Resume the loop after a delay, starting from wherever the user left it
	const resumeLater = (delay = RESUME_DELAY) => {
		clearTimeout(resumeTimerRef.current);
		resumeTimerRef.current = setTimeout(() => {
			if (pressedRef.current) return;
			posRef.current = wrap(containerRef.current?.scrollLeft || 0);
			pausedRef.current = false;
		}, delay);
	};

	const handleScroll = () => {
		// Ignore scroll events caused by the auto loop itself
		if (!pausedRef.current && !stoppedRef.current) return;
		const container = containerRef.current;
		const wrapped = wrap(container.scrollLeft);
		if (wrapped !== container.scrollLeft) container.scrollLeft = wrapped; // infinite manual scroll
		posRef.current = wrapped;
		// Still scrolling (e.g. touch momentum): push the resume back
		if (pausedRef.current && !pressedRef.current) resumeLater();
	};

	const handlePointerDown = (e) => {
		pressedRef.current = true;
		movedRef.current = false;
		pause();
		if (e.pointerType !== "mouse" || !isOverflowing) return;
		dragRef.current = {
			active: true,
			startX: e.clientX,
			startScroll: containerRef.current.scrollLeft,
		};
		containerRef.current.setPointerCapture(e.pointerId);
		setIsDragging(true);
	};

	const handlePointerMove = (e) => {
		if (!dragRef.current.active) return;
		const delta = e.clientX - dragRef.current.startX;
		if (Math.abs(delta) > DRAG_THRESHOLD) movedRef.current = true;
		containerRef.current.scrollLeft = dragRef.current.startScroll - delta;
	};

	const handlePointerEnd = (e) => {
		pressedRef.current = false;
		if (dragRef.current.active) {
			dragRef.current.active = false;
			containerRef.current.releasePointerCapture?.(e.pointerId);
			setIsDragging(false);
		}
		resumeLater();
	};

	// A plain click (not a drag) toggles stop / start
	const handleClick = () => {
		if (movedRef.current) {
			movedRef.current = false;
			return;
		}
		stoppedRef.current = !stoppedRef.current;
	};

	const handleWheel = () => {
		pause();
		resumeLater();
	};

	if (!hasTitles) return null;

	const renderSet = (ref, hidden) => (
		<div ref={ref} aria-hidden={hidden || undefined} className={styles.set}>
			{titles.map((title) => (
				<Chip key={title} title={title} />
			))}
		</div>
	);

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${isOverflowing ? `${styles.draggable} ${styles.fade}` : ""} ${isDragging ? styles.dragging : ""}`}
			role="presentation"
			onClick={handleClick}
			onPointerCancel={handlePointerEnd}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerEnd}
			onScroll={handleScroll}
			onWheel={handleWheel}
		>
			{renderSet(setRef, false)}
			{isOverflowing && renderSet(null, true)}
		</div>
	);
}

export default CustomCarousel;
