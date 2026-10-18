import React from "react";
import { useLanguage } from "../../../../LanguageContext";
import styles from "./LanguageSwitch.module.css";

function LanguageSwitch({ isLightMode, onClick }) {
	const { lang } = useLanguage();
	return (
		<button className={styles.btn} data-is-light-mode={isLightMode} type="button" onClick={onClick}>
			<span className={`${styles.langText} ${lang.includes("en") ? styles.dimmed : ""}`}>EN</span>
			<span>|</span>
			<span className={`${styles.langText} ${lang.includes("fr") ? styles.dimmed : ""}`}>FR</span>
		</button>
	);
}

export default LanguageSwitch;
