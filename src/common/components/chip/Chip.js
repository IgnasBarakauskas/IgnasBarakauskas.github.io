import React from "react";
import styles from "./Chip.module.css";

function Chip({ title }) {
	return <div className={styles.chip}>{title}</div>;
}

export default Chip;
