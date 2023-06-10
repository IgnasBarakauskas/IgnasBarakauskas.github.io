import React from "react";
import styles from "./Experience.module.css";

const About = React.forwardRef((_, ref) => (
	<div ref={ref} className={styles.container}>
		<div className={styles.title}>Experience</div>
		<div>Back in 2015</div>{" "}
	</div>
));

export default About;
