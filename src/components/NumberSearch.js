import React from "react";

const NumberSearch = (props) => {
	return (
		<>
			<input
				type="number"
				value={props.number}
				placeholder="Put a number in me.."
				onChange={(e) => {
					props.onNumberChange(e.target.value);
				}}
				onKeyUp={(e) => {
					if (e.keyCode === 13) {
						props.submitRequest();
					}
				}}
			/>
			<button onClick={props.submitRequest}>Search</button>
		</>
	);
};

export default NumberSearch;
