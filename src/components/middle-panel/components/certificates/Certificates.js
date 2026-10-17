import React from "react";
import styles from "./Certificates.module.css";
import { CredlyBadge } from "./components";

const Projects = React.forwardRef((_, ref) => (
	<div ref={ref} className={styles.container}>
		<div className={styles.title}>Certificates</div>
		<div className={styles.content}>
			<CredlyBadge badgeId="d5c6efe0-52fe-404d-a4cb-75d9a28d18df" />
			<CredlyBadge badgeId="eab8a78f-f6f1-4405-9855-d1d6ac1a5283" />
		</div>
	</div>
));

export default Projects;
