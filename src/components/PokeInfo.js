import React from "react";
import "../App.css";

const PokeInfo = (props) => {
	console.log(props);
	const { info } = props;
	const { types, height, weight } = info;
	console.log(types);
	return (
		<div className="poke-info">
			<div className="types">{types.join()}</div>
			<div className="height">{height}</div>
			<div className="weight">{weight}</div>
		</div>
	);
};

export default PokeInfo;
