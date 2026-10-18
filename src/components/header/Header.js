import React from "react";
import styles from "./Header.module.css";
import ModeSwitch from "./components/mode-switch/ModeSwitch";

function Header({ isLightMode, onChangeLightMode }) {
	return (
		<div className={styles.header} data-is-light-mode={isLightMode}>
			<ModeSwitch isLightMode={isLightMode} onChangeLightMode={onChangeLightMode} />
		</div>
	);
}

export default Header;
