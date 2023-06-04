import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function IconComponent({ className, color, icon }) {
	return <FontAwesomeIcon className={className} color={color} icon={icon} />;
}

export default IconComponent;
