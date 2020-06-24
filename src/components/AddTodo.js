import React from "react";

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
		};
	}

	render() {
		return (
			<form>
				<input
					type="text"
					name="title"
					placeholder="Add to do..."
					style={{ flex: "10", padding: "5px", width: "90%" }}
				/>
				<input
					type="submit"
					value="submit"
					className="btn"
					style={{ flex: "1" }}
				/>
			</form>
		);
	}
}

export default AddTodo;
