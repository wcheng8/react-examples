import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/Content";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";

ReactDOM.render(
	<>
		<Header />
		<hr />
		<Content />
		<hr />
		<Benefits />
		<Footer />
	</>,
	document.getElementById("root")
);
