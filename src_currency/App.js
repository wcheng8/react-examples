import React, { useState, useEffect } from "react";
import currencies from "./supported-currencies.json";
import "./App.css";

const App = () => {
	const [selectedCurrency, setSelectedCurrency] = useState("AUD");

	useEffect(() => {
		console.log("The currency changed to", selectedCurrency);
	}, [selectedCurrency]);
	return (
		<div>
			<select onChange={(e) => console.log(e.target.value)}>
				{currencies.map((currencyObj) => (
					<option
						value={currencyObj.currency}
						key={currencyObj.currency}
					></option>
				))}
			</select>
		</div>
	);
};
export default App;
