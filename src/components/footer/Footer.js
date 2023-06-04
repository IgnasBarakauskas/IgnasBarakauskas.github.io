import React from "react";
import styles from "./Footer.module.css";
import { IconComponent } from "../../common/components";
import { icons } from "../../common/icons";

function Footer({ isLightMode }) {
	return (
		<div className={styles.footer} data-is-light={isLightMode}>
			<IconComponent className={styles.copyRight} icon={icons.faCopyright} /> {new Date().getFullYear()},
			&nbsp;Ignas Barakauskas
		</div>
	);
}

export default Footer;
