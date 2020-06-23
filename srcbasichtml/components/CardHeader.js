import React from "react";

export const CardHeader = () => {
	return (
		<div style={header}>
			<h1>Space Force</h1>
			<div style={metadata}>
				<div>99% Match</div>
				<div>2020</div>
				<div style={rating}>M</div>
				<div>1 season</div>
			</div>
		</div>
	);
};

const header = {
	display: "flex",
	flexDirection: "column",
	margin: "10px",
};
const metadata = {
	display: "flex",
	justifyContent: " space-between",
};
const rating = {
	fontWeight: "bold",
};
