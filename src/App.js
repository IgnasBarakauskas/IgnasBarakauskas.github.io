import React, { useEffect, useState, useRef } from "react";
import styles from "./App.module.css";
import { Header, PersonalPanel, Footer, Menu, MiddlePanel } from "./components";

function App() {
	const [isLightMode, setIsLightMode] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const certificatesRef = useRef(null);
	useEffect(() => {
		setIsLightMode(!window.matchMedia("(prefers-color-scheme: dark)").matches);
	}, []);
	const handleChangeLightMode = () => {
		setIsLightMode((prev) => !prev);
	};
	useEffect(() => {
		setHideMenu(window.innerWidth > 900);
		const handleLogoSize = () => {
			setHideMenu(window.innerWidth > 900);
		};
		window.addEventListener("resize", handleLogoSize);
		return () => {
			window.removeEventListener("resize", handleLogoSize);
		};
	}, []);
	const handleClickMenu = (menu) => {
		if (menu === "about") {
			aboutRef.current.scrollIntoView({ behavior: "smooth" });
		}
		if (menu === "experience") {
			experienceRef.current.scrollIntoView({ behavior: "smooth" });
		}
		if (menu === "certificates") {
			certificatesRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className={styles.container} data-is-light={isLightMode}>
			<div className={styles.body}>
				<Header isLightMode={isLightMode} onChangeLightMode={handleChangeLightMode} />
				<div className={styles.profile}>
					<PersonalPanel isLightMode={isLightMode} />
				</div>
				<div className={styles.experience}>
					<MiddlePanel
						aboutRef={aboutRef}
						certificatesRef={certificatesRef}
						experienceRef={experienceRef}
						isLightMode={isLightMode}
					/>
				</div>
				{hideMenu && (
					<div className={styles.menu}>
						<Menu onClickMenu={handleClickMenu} />
					</div>
				)}
			</div>
			<Footer isLightMode={isLightMode} />
		</div>
	);
}

export default App;
