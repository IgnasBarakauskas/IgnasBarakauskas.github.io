import React from "react";
import { About, Experience, Certificates } from "./components";
import styles from "./MiddlePanel.module.css";

function MiddlePanel({ aboutRef, experienceRef, certificatesRef }) {
	return (
		<div className={styles.container}>
			<About ref={aboutRef} />
			<Experience ref={experienceRef} />
			<Certificates ref={certificatesRef} />
		</div>
	);
}

export default MiddlePanel;
