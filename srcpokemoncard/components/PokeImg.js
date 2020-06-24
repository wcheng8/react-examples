import React from "react";
import "../App.css";

const PokeImg = ({ img }) => {
	return (
		<div className="poke-image">
			<img height="100px" src={img} alt="" />
		</div>
	);
};

export default PokeImg;
