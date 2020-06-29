import React, { Component } from "react";
import NumberSearch from "./components/NumberSearch";
import axios from "axios";
import "./App.js";
export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: "",
			funfact: "",
			datefact: "",
		};
		this.date = new Date();
		this.month = this.date.getMonth() + 1;
		this.day = this.date.getDate();
	}
	onNumberChange = (num) => {
		this.setState({ number: num });
	};

	dateFact = (month, day) => {
		axios
			.get(`http://numbersapi.com/${month}/${day}/date`)
			.then((res) => this.setState({ datefact: res.data }));
	};
	componentDidMount() {
		this.dateFact(this.month, this.day);
	}
	submitRequest = () => {
		console.log("Submit: ", this.state.number);
		axios
			.get(`http://numbersapi.com/${this.state.number}`)
			.then((res) => this.setState({ funfact: res.data }))
			.catch((error) => console.log(error));
	};
	render() {
		return (
			<>
				<div>
					<h1>Facts about numbers!</h1>
					<h2>Search a number...</h2>
					<NumberSearch
						number={this.state.number}
						onNumberChange={this.onNumberChange}
						submitRequest={this.submitRequest}
					/>
				</div>
				{this.state.funfact}
				<hr />
				<div>
					{`Today's Date: ${this.date.getMonth() + 1}/${this.date.getDate()}`}
				</div>
				<div>
					<div>Today's Fun fact: {this.state.datefact}</div>
				</div>
			</>
		);
	}
}

export default App;
