import React from "react";
import styles from "./Menu.module.css";

function Menu() {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.menuItem}>About</div>
				<div className={styles.menuItem}>Experience</div>
				<div className={styles.menuItem}>Projects</div>
			</div>
		</div>
	);
}

export default Menu;
