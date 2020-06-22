import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div style={headerclass}>
			<h1>React</h1>
			<div className="links">
				<a href="https://reactjs.org/tutorial/tutorial.html">
					Official Tutorial
				</a>
				<a href="https://github.com/facebook/react">Github Code</a>
				<a href="https://en.wikipedia.org/wiki/React_(web_framework)">
					Wikipedia
				</a>
			</div>
		</div>
	);
};

const headerclass = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};

export default Header;
