import React from "react";
import styles from "./Experience.module.css";
import { ExperienceBlock } from "./components";
import { icons } from "../../../../common/icons";
import { VerticalDevider } from "../../../../common/components";
import { useLanguage } from "../../../../LanguageContext";

const About = React.forwardRef(({ isLightMode }, ref) => {
	const { translate } = useLanguage();
	return (
		<div ref={ref} className={styles.container}>
			<div className={styles.title}>Experience</div>
			<div className={styles.experienceContainer}>
				<ExperienceBlock
					isExpanded
					description={translate("experience.first.description")}
					duration={translate("experience.first.duration")}
					icon={icons.faCode}
					position={translate("experience.first.position")}
					subDetails={[
						{
							key: 1,
							text: translate("experience.first.sub-details-1"),
						},
						{
							key: 2,
							text: translate("experience.first.sub-details-2"),
						},
						{
							key: 3,
							text: translate("experience.first.sub-details-3"),
						},
						{
							key: 4,
							text: translate("experience.first.sub-details-4"),
						},
						{
							key: 5,
							text: translate("experience.first.sub-details-5"),
						},
					]}
					title={translate("experience.first.title")}
				/>
				<VerticalDevider isLightMode={isLightMode} />
				<ExperienceBlock
					description={translate("experience.second.description")}
					duration={translate("experience.second.duration")}
					icon={icons.faPuzzlePiece}
					position={translate("experience.second.position")}
					subDetails={[
						{
							key: 1,
							text: translate("experience.second.sub-details-1"),
						},
						{
							key: 2,
							text: translate("experience.second.sub-details-2"),
						},
						{
							key: 3,
							text: translate("experience.second.sub-details-3"),
						},
					]}
					title={translate("experience.second.title")}
				/>
				<VerticalDevider isLightMode={isLightMode} />
				<ExperienceBlock
					description={translate("experience.third.description")}
					duration={translate("experience.third.duration")}
					icon={icons.faCodeBranch}
					position={translate("experience.third.position")}
					subDetails={[
						{ key: 1, text: translate("experience.third.sub-details-1") },
						{ key: 2, text: translate("experience.third.sub-details-2") },
						{
							key: 3,
							text: translate("experience.third.sub-details-3"),
						},
					]}
					title={translate("experience.third.title")}
				/>
			</div>
		</div>
	);
});

export default About;
