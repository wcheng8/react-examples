import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import DogImg from "./DogImg";
import Home from "./Home";
export class App extends Component {
	render() {
		return (
			<div>
				<h1>Random Dog Image Generator by Breed!</h1>
				<BrowserRouter>
					<Route exact path="/" component={Home} />
					<Route exact path="/dog/:breed" component={DogImg} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
