import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";

import TypeCard from "../type-card";

import "./pokemon-banner.style.scss";
import { selectCatch } from "../../redux/catch/catch.selector";

interface Props {
  className?: string;
}

const PokemonBanner: React.FC<Props> = ({ className }) => {
  const { name } = useParams();
  const pokemon = useSelector(selectPokemonByName(name));

  const catchState = useSelector(selectCatch);

  const pokemonDetails = pokemon?.details;

  return (
    <div className={`pokemonBanner ${catchState.catchReady && 'pokemonBanner--catchMode'} bg-${pokemonDetails?.types[0].type.name}-light`}>
      {pokemonDetails && (
        <img
          className="pokemonBanner__image"
          alt=""
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetails?.id}.png`}
        />
      )}
      <span className="pokemonBanner__orderNumber">#{pokemonDetails?.order}</span>
      <span className="pokemonBanner__name">{pokemonDetails?.name}</span>
      <div className="pokemonBanner__types">
        {pokemonDetails?.types.map((type, i) => (
          <TypeCard key={i} type={type.type.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonBanner;
