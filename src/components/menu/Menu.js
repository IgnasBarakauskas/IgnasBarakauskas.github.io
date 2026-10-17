import React from "react";
import styles from "./Menu.module.css";

function Menu({ onClickMenu }) {
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.menuItem} role="presentation" onClick={() => onClickMenu("about")}>
					About
				</div>
				<div className={styles.menuItem} role="presentation" onClick={() => onClickMenu("experience")}>
					Experience
				</div>
				<div className={styles.menuItem} role="presentation" onClick={() => onClickMenu("certificates")}>
					Certificates
				</div>
			</div>
		</div>
	);
}

export default Menu;
