import React from "react";
import styles from "./Header.module.css";
import ModeSwitch from "./components/mode-switch/ModeSwitch";

function Header({ isLightMode, hideMenu, onChangeLightMode }) {
	return (
		<div className={styles.header} data-is-light-mode={isLightMode}>
			<div className={styles.menuName}>{!hideMenu && "Name"}</div>
			<ModeSwitch isLightMode={isLightMode} onChangeLightMode={onChangeLightMode} />
		</div>
	);
}

export default Header;
