import React from "react";
import styles from "./About.module.css";
import { CustomCarousel } from "../../../../common/components";
import { useLanguage } from "../../../../LanguageContext";

const About = React.forwardRef((_, ref) => {
	const { translate } = useLanguage();
	return (
		<div ref={ref} className={styles.container}>
			<div className={styles.title}>{translate("about.title")}</div>
			<div className={styles.text}>
				Full-stack developer focused on front-end engineering, complex integrations, and technical ownership.
				Since joining AItenders, I<span>&apos;</span>ve grown from an intern into owning key product areas,
				shaping technical decisions, and delivering features across the React, TypeScript, Java, and Spring Boot
				stack. From building a performance-sensitive Microsoft Word add-in to modernizing an established
				platform, I enjoy solving challenging problems through research, thoughtful engineering, and a focus on
				long-term maintainability.
			</div>
			<CustomCarousel
				titles={[
					"React",
					"TypeScript",
					"JavaScript",
					"NodeJs",
					"Spring boot",
					"Java",
					"MySQL",
					"HTML5",
					"CSS3",
				]}
			/>
		</div>
	);
});

export default About;
