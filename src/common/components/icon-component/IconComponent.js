import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function IconComponent({ icon, color }) {
	return <FontAwesomeIcon color={color} icon={icon} />;
}

export default IconComponent;
