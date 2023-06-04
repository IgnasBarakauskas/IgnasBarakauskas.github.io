import React from "react";
import styles from "./ModeSwitch.module.css";

function ModeSwitch({ isLightMode, onChangeLightMode }) {
	return (
		<button className={styles.input} data-is-light={isLightMode} type="button" onClick={onChangeLightMode}>
			<div className={styles.slider} data-is-light={isLightMode} />
			<div className={styles["slider--delayed"]} data-is-light={isLightMode} />
		</button>
	);
}

export default ModeSwitch;
