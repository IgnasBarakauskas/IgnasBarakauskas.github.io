import React, { useState } from "react";
import styles from "./App.module.css";
import { Header, PersonalPanel, Footer } from "./components";

function App() {
	const [isLightMode, setIsLightMode] = useState(false);
	const handleChangeLightMode = () => {
		setIsLightMode((prev) => !prev);
	};
	return (
		<div className={styles.container} data-is-light={isLightMode}>
			<Header isLightMode={isLightMode} onChangeLightMode={handleChangeLightMode} />
			<div className={styles.body}>
				<div className={styles.sidePanel}>
					<PersonalPanel isLightMode={isLightMode} />
				</div>
				<div className={styles.sidePanel}>Scroll</div>
			</div>
			<Footer isLightMode={isLightMode} />
		</div>
	);
}

export default App;
