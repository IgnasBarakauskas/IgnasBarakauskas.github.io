import React from "react";
import styles from "./App.module.css";
import { Logo } from "./common/icons";

function App() {
	return (
		<div className={styles.container}>
			<Logo className={styles.logo} />
		</div>
	);
}

export default App;
