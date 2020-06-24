import React from "react";
import "./App.css";
import PokeCard from "./components/PokeCard";

const App = () => {
	const pokemonData = [
		{
			img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
			info: {
				types: ["grass", "poison"],
				height: "30cm",
				weight: "15kg",
			},
			name: "bulbasaur",
			stat: { attack: "49", defense: "33", strength: "67" },
		},
		{
			img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
			info: {
				types: ["electric"],
				height: "13cm",
				weight: "15kg",
			},
			name: "pikachu",
			stat: { attack: "32", defense: "15", strength: "88" },
		},
		{
			img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
			info: {
				types: ["fire", "normal"],
				height: "44cm",
				weight: "79kg",
			},
			name: "charmander",
			stat: { attack: "29", defense: "47", strength: "68" },
		},
	];
	return (
		<div className="poke-cards">
			{pokemonData.map((pokemon, i) => (
				<PokeCard
					key={i}
					img={pokemon.img}
					info={pokemon.info}
					name={pokemon.name}
					stat={pokemon.stat}
				/>
			))}
		</div>
	);
};

export default App;
