import React, { useState } from "react";
import styles from "./IBLogo.module.css";
import { Logo } from "../../../../common/icons";
import { profilePicture } from "../../../../images";

function IBLogo({ isLightMode }) {
	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};
	const handleMouseLeave = () => {
		setHovered(false);
	};
	return (
		<div className={styles.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<Logo className={styles.logo} data-is-hovered={hovered} data-is-light={isLightMode} />

			<img alt="" className={styles.profilePicture} data-is-hovered={hovered} src={profilePicture} />
		</div>
	);
}

export default IBLogo;
