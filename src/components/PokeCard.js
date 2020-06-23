import React from "react";
import PokeImg from "./PokeImg";
import PokeInfo from "./PokeInfo";
import PokeStats from "./PokeStats";
import Pokename from "./Pokename";

import "../App.css";

const PokeCard = ({ img, info, name, stat }) => {
	return (
		<div className="poke">
			<PokeImg img={img} />
			<PokeInfo info={info} />
			<Pokename name={name} />
			<PokeStats stat={stat} />
		</div>
	);
};

export default PokeCard;
