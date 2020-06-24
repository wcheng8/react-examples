import React, { Component } from "react";

export class AddNumber extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<button onClick={this.props.addtoSum.bind(this, this.props.addnum)}>
					{this.props.addnum}
				</button>
			</>
		);
	}
}

export default AddNumber;
