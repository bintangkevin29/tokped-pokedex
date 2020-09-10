import React from "react";

import "./pokemon-list.style.scss";

interface Props {
  pokemons: PokemonList[];
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {
  return <div className="pokemonList">{pokemons.map((pokemon) => pokemon.name)}</div>;
};

export default PokemonList;
