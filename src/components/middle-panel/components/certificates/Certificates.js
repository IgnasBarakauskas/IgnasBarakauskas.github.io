import React from "react";
import styles from "./Certificates.module.css";

const Projects = React.forwardRef((_, ref) => (
	<div ref={ref} className={styles.container}>
		<div className={styles.title}>Certificates</div>
		<div>Lorem ipsum</div>
	</div>
));

export default Projects;
