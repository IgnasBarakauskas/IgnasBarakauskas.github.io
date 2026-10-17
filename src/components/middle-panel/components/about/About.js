import React from "react";
import styles from "./About.module.css";
import { CustomCarousel } from "../../../../common/components";

const About = React.forwardRef((_, ref) => (
	<div ref={ref} className={styles.container}>
		<div className={styles.title}>About</div>
		<div>
			Full-stack developer focused on front-end engineering, complex integrations, and technical ownership. Since
			joining AItenders, I{"&apos;"}ve grown from an intern into owning key product areas, shaping technical
			decisions, and delivering features across the React, TypeScript, Java, and Spring Boot stack. From building
			a performance-sensitive Microsoft Word add-in to modernizing an established platform, I enjoy solving
			challenging problems through research, thoughtful engineering, and a focus on long-term maintainability.
		</div>
		<CustomCarousel
			titles={["React", "TypeScript", "JavaScript", "NodeJs", "Spring boot", "Java", "MySQL", "HTML5", "CSS3"]}
		/>
	</div>
));

export default About;
