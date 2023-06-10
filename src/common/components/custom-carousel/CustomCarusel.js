import React, { useRef } from "react";
import { Chip } from "..";
import styles from "./CustomCarousel.module.css";

function CustomCarousel({ titles }) {
	const carouselRef = useRef();
	const test = () => {
		console.log("asd");
		carouselRef.current.test({ behavior: "smooth" });
	};
	return (
		<div ref={carouselRef} className={styles.container} role="presentation" onClick={test}>
			{Array.isArray(titles) && titles.length > 0 && titles.map((title) => <Chip key={title} title={title} />)}
		</div>
	);
}

export default CustomCarousel;
