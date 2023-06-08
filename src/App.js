import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header, PersonalPanel, Footer, Menu } from "./components";

function App() {
	const [isLightMode, setIsLightMode] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	const handleChangeLightMode = () => {
		setIsLightMode((prev) => !prev);
	};
	useEffect(() => {
		const handleLogoSize = () => {
			setHideMenu(window.innerWidth > 900);
		};
		window.addEventListener("resize", handleLogoSize);
		return () => {
			window.removeEventListener("resize", handleLogoSize);
		};
	}, []);
	return (
		<div className={styles.container} data-is-light={isLightMode}>
			<div className={styles.body}>
				<Header isLightMode={isLightMode} onChangeLightMode={handleChangeLightMode} />
				<div className={styles.profile}>
					<PersonalPanel isLightMode={isLightMode} />
				</div>
				<div className={styles.experience}>Scroll</div>
				{hideMenu && (
					<div className={styles.menu}>
						<Menu />
					</div>
				)}
			</div>
			<Footer isLightMode={isLightMode} />
		</div>
	);
}

export default App;
