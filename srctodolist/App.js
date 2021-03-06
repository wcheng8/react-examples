import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Pages/About";
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
				if (todo.id === id) {
					todo.isCompleted = !todo.isCompleted;
				}
				return todo;
			}),
		});
	};

	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	addTodo = (title) => {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: Math.floor(Math.random() * 10000),
					title,
					isCompleted: false,
				},
			],
		});
	};
	render() {
		console.log(this.state.todos);
		return (
			<Router>
				<div className="container">
					<Header />
					<Route
						exact
						path="/"
						render={(props) => (
							<React.Fragment>
								<TodoList
									todos={this.state.todos}
									markComplete={this.markComplete}
									delTodo={this.delTodo}
								/>
								<AddTodo addTodo={this.addTodo} />
							</React.Fragment>
						)}
					/>
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
