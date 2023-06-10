import React from "react";
import styles from "./Projects.module.css";

const Projects = React.forwardRef((_, ref) => (
	<div ref={ref} className={styles.container}>
		<div className={styles.title}>Projects</div>
		<div>Back in 2015</div>
	</div>
));

export default Projects;
