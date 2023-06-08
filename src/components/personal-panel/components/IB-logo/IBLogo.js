import React from "react";
import styles from "./IBLogo.module.css";
import { Logo } from "../../../../common/icons";
import { profilePicture } from "../../../../images";

function IBLogo({ isLightMode }) {
	return (
		<div className={styles.container}>
			<div className={styles.inner__container}>
				<div className={styles.front}>
					<Logo className={styles.logo} data-is-light={isLightMode} />
				</div>
				<div className={styles.back}>
					<img alt="" className={styles.profilePicture} src={profilePicture} />
				</div>
			</div>
		</div>
	);
}

export default IBLogo;
