import React from "react";

export default function CardImage({ src }) {
	return (
		<>
			<img src={src} style={{ width: "50%" }} alt="" />
		</>
	);
}
