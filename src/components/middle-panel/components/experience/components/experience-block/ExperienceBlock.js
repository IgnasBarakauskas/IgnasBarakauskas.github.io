import React, { useEffect, useState } from "react";
import { IconComponent } from "../../../../../../common/components";
import styles from "./ExperienceBlock.module.css";
import { icons } from "../../../../../../common/icons";

function ExperienceBlock({ isExpanded, icon, title, position, duration, description, subDetails }) {
	const [expanded, setExpanded] = useState(false);
	useEffect(() => {
		setExpanded(isExpanded);
	}, [isExpanded]);
	const handleChangeExpansion = () => {
		setExpanded((prev) => !prev);
	};
	return (
		<div className={styles.container} role="presentation" onClick={handleChangeExpansion}>
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
				<div className={styles.subDetails} data-expanded={expanded}>
					<ul className={styles.list} data-expanded={expanded}>
						{Array.isArray(subDetails) &&
							subDetails.length > 0 &&
							subDetails.map((subDetail) => <li key={subDetail.key}>{subDetail.text}</li>)}
					</ul>
				</div>
				{!expanded && (
					<div className={styles.extraInfo}>
						<IconComponent icon={icons.faEllipsis} />
					</div>
				)}
			</div>
		</div>
	);
}

export default ExperienceBlock;
