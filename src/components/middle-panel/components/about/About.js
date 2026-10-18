import React from "react";
import styles from "./About.module.css";
import { CustomCarousel } from "../../../../common/components";
import { useLanguage } from "../../../../LanguageContext";

const About = React.forwardRef((_, ref) => {
	const { translate } = useLanguage();
	return (
		<div ref={ref} className={styles.container}>
			<div className={styles.title}>{translate("about.title")}</div>
			<div className={styles.text}>{translate("about.sub-text")}</div>
			<CustomCarousel titles={["React", "TypeScript", "JavaScript", "NodeJs", "Spring boot", "Java", "MySQL"]} />
		</div>
	);
});

export default About;
