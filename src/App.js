import React from "react";
import TodoList from "./components/TodoList";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					title: "Take out the trash",
					isCompleted: false,
				},
				{
					id: 2,
					title: "Work on porfolio",
					isCompleted: false,
				},
				{
					id: 3,
					title: "Cook lunch",
					isCompleted: false,
				},
			],
		};
	}

	// toggle complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id == id) {
					todo.isCompleted = !todo.isCompleted;
				}
				return todo;
			}),
		});
	};
	render() {
		console.log(this.state.todos);
		return (
			<>
				<TodoList todos={this.state.todos} markComplete={this.markComplete} />
			</>
		);
	}
}

export default App;
