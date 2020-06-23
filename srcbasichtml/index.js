import React from "react";
import ReactDOM from "react-dom";
import { CardHeader } from "./components/CardHeader";
import { CardDescription } from "./components/CardDescription";
import { CardButton } from "./components/CardButton";
import CardImage from "./components/CardImage";
// import Content from "./components/Content";
// import Benefits from "./components/Benefits";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

ReactDOM.render(
	// <>
	// 	{/* <Header />
	// 	<hr />
	// 	<Content />
	// 	<hr />
	// 	<Benefits />
	// 	<Footer /> */}

	// </>,

	<div style={{ display: "flex" }}>
		<div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
			<CardHeader />
			<CardDescription />
			<CardButton />
		</div>
		<CardImage
			src={
				"https://the-drive-3.imgix.net/https%3A%2F%2Fapi.thedrive.com%2Fwp-content%2Fuploads%2F2020%2F05%2F2352525.jpg%3Fquality%3D85?w=1440&auto=compress%2Cformat&ixlib=js-1.4.1&s=bf6dbba3690e3f7875425dd99dd3dd82"
			}
		/>
	</div>,
	document.getElementById("root")
);
