import React, { Component } from "react";
import axios from "axios";

class DogImg extends Component {
	constructor(props) {
		super(props);

		this.state = {
			img: null,
		};
	}

	async componentDidMount() {
		let { breed } = this.props.match.params;
		breed = breed.toLowerCase();
		const res = await axios.get(
			`https://dog.ceo/api/breed/${breed}/images/random`
		);
		console.log(res);
		this.setState({ img: res.data.message });
	}
	render() {
		console.log(this.props);
		return (
			<>
				<h1>Dog Breed: {this.props.match.params.breed}</h1>
				{this.state.img && (
					<img
						src={`${this.state.img}`}
						alt={`${this.props.match.params.breed}`}
					></img>
				)}
			</>
		);
	}
}

export default DogImg;
