import React, { useEffect } from "react";

export default function CredlyBadge({ badgeId, width = 150, height = 270 }) {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cdn.credly.com/assets/utilities/embed.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [badgeId]);

	return (
		<div
			data-iframe-height={height}
			data-iframe-width={width}
			data-share-badge-host="https://www.credly.com"
			data-share-badge-id={badgeId}
		/>
	);
}
