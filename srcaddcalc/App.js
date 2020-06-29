import React from "react";
import "./App.css";
import AddNumber from "./components/AddNumber";
export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sum: 0,
		};
	}

	addtoSum = (num) => {
		this.setState({
			sum: this.state.sum + num,
		});
	};

	render() {
		const addnumbers = [0, 1, 2, 3, 4, 5];
		return (
			<div>
				<h1 style={{ display: "flex", justifyContent: "center" }}>
					Add Number Calculator!
				</h1>
				<div
					style={{
						fontWeight: "bold",
						display: "flex",
						justifyContent: "center",
					}}
				>
					{this.state.sum}
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					{addnumbers.map((addnum) => (
						<AddNumber addnum={addnum} addtoSum={this.addtoSum} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
