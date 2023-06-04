import React, { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components";

function App() {
	const [isLightMode, setIsLightMode] = useState(false);
	const handleChangeLightMode = () => {
		setIsLightMode((prev) => !prev);
	};
	return (
		<div className={styles.container} data-is-light={isLightMode}>
			<Header isLightMode={isLightMode} onChangeLightMode={handleChangeLightMode} />
			<div className={styles.body} />
		</div>
	);
}

export default App;
