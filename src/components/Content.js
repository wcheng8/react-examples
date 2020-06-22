import React from "react";
import Iframe from "react-iframe";

const Content = () => {
	return (
		<div style={{ display: "flex" }}>
			<div style={description}>
				<h2>What is React?</h2>
				<p>
					React components implement a render() method that takes input data and
					returns what to display. This example uses an XML-like syntax called
					JSX. Input data that is passed into the component can be accessed by
					render() via this.props.
				</p>
				<p>
					JSX is optional and not required to use React. Try the Babel REPL to
					see the raw JavaScript code produced by the JSX compilation step.
				</p>
			</div>
			<div style={codeeditor}>
				<h2>Try it out!</h2>
				<Iframe
					height="265"
					width="100%"
					scrolling="no"
					title="Tic Tac Toe"
					src="https://codepen.io/gaearon/embed/oWWQNa?height=265&theme-id=light&default-tab=js,result"
					frameborder="no"
					allowtransparency="true"
					allowfullscreen="true"
				/>
				See the Pen{" "}
				<a href="https://codepen.io/gaearon/pen/oWWQNa">Tic Tac Toe</a> by Dan
				Abramov (<a href="https://codepen.io/gaearon">@gaearon</a>) on{" "}
				<a href="https://codepen.io">CodePen</a>.
			</div>
		</div>
	);
};
const description = {
	width: "50%",
};

const codeeditor = {
	width: "50%",
};

export default Content;
