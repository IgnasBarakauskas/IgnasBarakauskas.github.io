import React, { useReducer } from "react";
import { IconComponent } from "../../../../../../common/components";
import styles from "./ExperienceBlock.module.css";

function ExperienceBlock({ icon, title, position, duration, description, subDetails }) {
	const [expanded, inverseExpanded] = useReducer((state) => !state, false);
	return (
		<div className={styles.container} role="presentation" onClick={inverseExpanded}>
			<div>
				<IconComponent icon={icon} />
			</div>
			<div>
				<div className={styles.title}>{title}</div>
				<div className={styles.subInfoContainer}>
					<div className={styles.subText}>{position}</div>
					<div className={styles.subText}>{duration}</div>
				</div>
				<div className={styles.description}>{description}</div>
				{expanded && (
					<div className={styles.subDetails}>
						<ul className={styles.list}>
							{Array.isArray(subDetails) &&
								subDetails.length > 0 &&
								subDetails.map((subDetail) => <li key={subDetail.key}>{subDetail.text}</li>)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default ExperienceBlock;
