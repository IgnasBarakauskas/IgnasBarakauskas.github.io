import React from "react";
import styles from "./Experience.module.css";
import { ExperienceBlock } from "./components";
import { icons } from "../../../../common/icons";
import { VerticalDevider } from "../../../../common/components";

const About = React.forwardRef(({ isLightMode }, ref) => (
	<div ref={ref} className={styles.container}>
		<div className={styles.title}>Experience</div>
		<div className={styles.experienceContainer}>
			<ExperienceBlock
				isExpanded
				description="Focus on front-end engineering and the continuous evolution of the company's core platform, combining hands-on development with technical ownership and architectural decision-making."
				duration="2023 – Present"
				icon={icons.faCode}
				position="AItenders · Full-time"
				subDetails={[
					{
						key: 1,
						text: "Technical ownership: Act as the primary developer responsible for the technical direction of a Microsoft Word add-in, making implementation decisions and evaluating trade-offs to ensure maintainability and performance.",
					},
					{
						key: 2,
						text: "Platform modernization: Initiate and drive improvements including gradual TypeScript adoption, internationalization, architectural refactoring, and performance optimization.",
					},
					{
						key: 3,
						text: "Technical discovery: Research complex or unfamiliar problems, assess risks, and validate potential solutions before implementation",
					},
					{
						key: 4,
						text: "Engineering practices: Explore effective ways to integrate AI into development workflows and share findings through internal technical articles.",
					},
					{
						key: 5,
						text: "Mentorship: Support interns and fellow developers through technical guidance, thoughtful code reviews, and collaborative problem-solving. Encourage independent thinking by helping developers approach problems from different perspectives rather than simply providing answers, while fostering a supportive and welcoming team environment.",
					},
				]}
				title="Full-Stack Developer"
			/>
			<VerticalDevider isLightMode={isLightMode} />
			<ExperienceBlock
				description="Developed a Microsoft Word add-in integrating with the company's core platform, working across front-end and back-end components."
				duration="2022 – 2023"
				icon={icons.faPuzzlePiece}
				position="AItenders · Master's internship"
				subDetails={[
					{
						key: 1,
						text: "Built application features using React and Office.js, with Java and Spring Boot on the back end.",
					},
					{
						key: 2,
						text: "Investigated performance challenges in a complex integration where existing documentation offered limited guidance.",
					},
					{
						key: 3,
						text: "Researched and evaluated alternative implementation approaches to address technical constraints and improve performance.",
					},
				]}
				title="Full-Stack Development Intern"
			/>
			<VerticalDevider isLightMode={isLightMode} />
			<ExperienceBlock
				description="Contributed to the core platform by developing an activity historization feature, working across the front end and back end."
				duration="2021 – 2022"
				icon={icons.faCodeBranch}
				position="AItenders · Bachelor's internship"
				subDetails={[
					{ key: 1, text: "Implemented user-facing functionality using React." },
					{ key: 2, text: "Integrated front-end components with Java and Spring Boot services." },
					{
						key: 3,
						text: "Delivered new functionality within an existing application, gaining experience in full-stack development and production software practices.",
					},
				]}
				title="Front-End Development Intern"
			/>
		</div>
	</div>
));

export default About;
