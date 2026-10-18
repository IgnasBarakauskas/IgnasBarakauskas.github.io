import React from "react";
import styles from "./Header.module.css";
import { useLanguage } from "../../LanguageContext";
import { LanguageSwitch, ModeSwitch } from "./components";

function Header({ isLightMode, onChangeLightMode }) {
	const { changeLanguage, lang } = useLanguage();
	const handleChangeLanguage = () => {
		changeLanguage(lang.includes("en") ? "fr" : "en");
	};
	return (
		<div className={styles.header} data-is-light-mode={isLightMode}>
			<LanguageSwitch isLightMode={isLightMode} onClick={handleChangeLanguage} />
			<ModeSwitch isLightMode={isLightMode} onChangeLightMode={onChangeLightMode} />
		</div>
	);
}

export default Header;
