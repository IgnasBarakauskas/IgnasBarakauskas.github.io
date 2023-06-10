import React from "react";
import { About, Experience, Projects } from "./components";
import styles from "./MiddlePanel.module.css";

function MiddlePanel({ aboutRef, experienceRef, projectsRef }) {
	return (
		<div className={styles.container}>
			<About ref={aboutRef} />
			<Experience ref={experienceRef} />
			<Projects ref={projectsRef} />
		</div>
	);
}

export default MiddlePanel;
