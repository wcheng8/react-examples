import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeView extends Component {
	render() {
		return (
			<div>
				<h1>Home View</h1>
				<Link to="/category">
					<button>Create a new entry</button>
				</Link>
			</div>
		);
	}
}

export default HomeView;
