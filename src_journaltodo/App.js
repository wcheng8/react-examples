import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeView from "./Views/HomeView";
import CategorySelectionView from "./Views/CategorySelectionView";
import NewEntryView from "./Views/NewEntryView";
export class App extends Component {
	state = {
		categories: ["food", "thoguhts", "other"],
		entries: [],
	};
	componentDidUpdate() {
		console.log(this.state);
	}

	onEntryFormSubmit = (value) => {
		this.setState((state) => {
			return { categories: [...state.categories, value.entry] };
		});
	};
	render() {
		const { categories } = this.state;
		return (
			<div>
				<BrowserRouter>
					<Link to="/">Home</Link>
					<Link to="/category">Category</Link>
					<Route exact path="/" component={HomeView} />
					<Route
						exact
						path="/category"
						render={(props) => (
							<CategorySelectionView {...props} categories={categories} />
						)}
					/>
					<Route
						exact
						path="/entry/new/:id"
						render={(props) => (
							<NewEntryView
								{...props}
								categories={categories}
								onEntryFormSubmit={this.onEntryFormSubmit}
							/>
						)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
