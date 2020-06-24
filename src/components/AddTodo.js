import React from "react";

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<input type="text" name="title" placeholder="Add to do..." />
			</form>
		);
	}
}

export default AddTodo;
