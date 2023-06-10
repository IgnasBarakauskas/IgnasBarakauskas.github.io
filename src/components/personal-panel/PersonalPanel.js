import React from "react";
import styles from "./PersonalPanel.module.css";
import IBLogo from "./components/IB-logo/IBLogo";
import { Connections } from "./components";

function PersonalPanel({ isLightMode }) {
	return (
		<div className={styles.container}>
			<div className={styles.top__container}>
				<IBLogo isLightMode={isLightMode} />
				<div className={styles.name}>Ignas Barakauskas</div>
				<div className={styles.description}>Full-stack developer at Aitenders</div>
			</div>
			<Connections />
		</div>
	);
}

export default PersonalPanel;
