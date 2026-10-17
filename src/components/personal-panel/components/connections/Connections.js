import React from "react";
import { IconComponent } from "../../../../common/components";
import { icons } from "../../../../common/icons";
import styles from "./Connections.module.css";

function Connections() {
	return (
		<div className={styles.container}>
			<a className={styles.link} href="https://github.com/IgnasBarakauskas" rel="noreferrer" target="_blank">
				<IconComponent className={styles.icon} icon={icons.faGithub} />
			</a>
			<a
				className={styles.link}
				href="https://www.linkedin.com/in/ignas-b-388353118/"
				rel="noreferrer"
				target="_blank"
			>
				<IconComponent className={styles.icon} icon={icons.faLinkedin} />
			</a>
			<a
				className={styles.link}
				href="https://www.facebook.com/ignas.barakauskas/"
				rel="noreferrer"
				target="_blank"
			>
				<IconComponent className={styles.icon} icon={icons.faFacebook} />
			</a>
			<a className={styles.link} href="mailto:b.ignas05@gmail.com?subject=Mail from portfolio.com">
				<IconComponent className={styles.icon} icon={icons.faEnvelope} />
			</a>
		</div>
	);
}

export default Connections;
