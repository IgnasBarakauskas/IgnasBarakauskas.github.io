import React from "react";
import { About, Experience, Certificates } from "./components";
import styles from "./MiddlePanel.module.css";

function MiddlePanel({ aboutRef, isLightMode, experienceRef, certificatesRef }) {
	return (
		<div className={styles.container}>
			<About ref={aboutRef} />
			<Experience ref={experienceRef} isLightMode={isLightMode} />
			<Certificates ref={certificatesRef} />
		</div>
	);
}

export default MiddlePanel;
