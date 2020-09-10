import React from "react";

import "./pokemon-list.style.scss";
import PokemonCard from "../pokemon-card";
import { PokemonList } from "../../redux/pokemons/pokemons";

interface Props {
  pokemons: PokemonList[];
}

const PokemonLists: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon, i) => (
        <PokemonCard key={i} pokemonDetailUrl={pokemon.url} />
      ))}
    </div>
  );
};

export default PokemonLists;
