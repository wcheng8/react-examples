import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			breeds: ["Pug", "Shiba", "Boxer"],
		};
	}

	render() {
		return (
			<div>
				{this.state.breeds.map((breed) => (
					<Link to={`/dog/${breed}`}>
						<ul>{breed}</ul>
					</Link>
				))}
			</div>
		);
	}
}

export default Home;
