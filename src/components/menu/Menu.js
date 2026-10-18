import React from "react";
import styles from "./Menu.module.css";
import { useLanguage } from "../../LanguageContext";

function Menu({ onClickMenu }) {
	const { translate } = useLanguage();
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.menuItem} role="presentation" onClick={() => onClickMenu("about")}>
					{translate("menu.about")}
				</div>
				<div className={styles.menuItem} role="presentation" onClick={() => onClickMenu("experience")}>
					{translate("menu.experience")}
				</div>
				<div className={styles.menuItem} role="presentation" onClick={() => onClickMenu("certificates")}>
					{translate("menu.certificates")}
				</div>
			</div>
		</div>
	);
}

export default Menu;
