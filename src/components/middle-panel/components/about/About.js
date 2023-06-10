import React from "react";
import styles from "./About.module.css";
import { CustomCarousel } from "../../../../common/components";

const About = React.forwardRef((_, ref) => (
	<div ref={ref} className={styles.container}>
		<div className={styles.title}>About</div>
		<div>Back in 2015</div>
		<CustomCarousel titles={["React", "Spring boot", "Java", "MySQL", "HTML5", "CSS3", "JavaScript", "NodeJs"]} />
	</div>
));

export default About;
