import React from "react";

const Footer = () => {
	return (
		<div style={footer}>
			<img
				width="25px"
				src="https://cdn2.hubspot.net/hub/2106109/hubfs/Coder%20Academy%20Logos/Coder%20Academy-%20White%20Background-08.png?width=108&height=108"
				alt=""
			></img>
			Copyright CoderAcademy 2020
		</div>
	);
};

const footer = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	background: "lightgray",
	padding: "10px",
};

export default Footer;
