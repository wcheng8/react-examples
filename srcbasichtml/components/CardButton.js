import React from "react";

export const CardButton = () => {
	return (
		<div style={cardbutton}>
			<button>Play</button>
			<button>+ My List</button>
			<div style={icon}>+1</div>
			<div style={icon}>-1</div>
		</div>
	);
};

const cardbutton = {
	display: "flex",
	justifyContent: "space-around",
	margin: "5px",
};

const icon = {
	border: "1px solid black",
	width: "25px",
	height: "25px",
	borderRadius: "50%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
};
