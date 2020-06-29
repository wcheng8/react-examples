import React, { Component } from "react";

class EntryForm extends Component {
	state = { entry: "", errorMessage: "" };
	onTextAreaChange = (event) => {
		this.setState({ entry: event.target.value });
	};
	onFormSubmit = (event) => {
		event.preventDefault();
		const { entry } = this.state;
		const { onEntryFormSubmit, category } = this.props;
		if (entry) {
			return onEntryFormSubmit({ category, entry });
		}
		return this.setState({ errorMessage: "Entry cannot be blank" });
	};

	render() {
		const { entry, errorMessage } = this.state;
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<textarea value={entry} onChange={this.onTextAreaChange} />
					{errorMessage}
				</div>
				<input type="submit" value="create new entry" />
			</form>
		);
	}
}

export default EntryForm;
