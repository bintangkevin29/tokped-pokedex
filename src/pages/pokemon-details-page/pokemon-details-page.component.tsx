import React from "react";

import "./pokemon-details-page.style.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";

const PokemonDetailsPage: React.FC = () => {
  const { name } = useParams();
  const pokemonData = useSelector(selectPokemonByName(name));
  console.log(pokemonData);

  return <div className="pokemonDetailsPage"></div>;
};

export default PokemonDetailsPage;
