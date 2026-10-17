import React from "react";
import styles from "./VerticalDivider.module.css";

function VerticalDivider({ isLightMode, className }) {
	return <span className={`${className} ${styles.divider}`} data-light-mode={isLightMode} />;
}
export default VerticalDivider;
