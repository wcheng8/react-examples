import React from "react";
import "../App.css";

const PokeStats = ({ stat: { attack, defense, strength } }) => {
	return (
		<>
			<div className="stat">
				<strong>attack:</strong>
				{attack}
			</div>
			<div className="stat">
				<strong>defense:</strong>
				{defense}
			</div>
			<div className="stat">
				<strong>strength:</strong>
				{strength}
			</div>
		</>
	);
};

export default PokeStats;
