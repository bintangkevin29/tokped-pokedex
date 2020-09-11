import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";

import TypeCard from "../type-card";

import "./pokemon-banner.style.scss";
import { selectCatch } from "../../redux/catch/catch.selector";
import { selectMyPokemonsByName } from "../../redux/my-pokemons/my-pokemons.selector";

interface Props {
  className?: string;
}

const PokemonBanner: React.FC<Props> = ({ className }) => {
  const { name } = useParams();
  const pokemon = useSelector(selectPokemonByName(name));

  const isCatched = useSelector(selectMyPokemonsByName(name));

  const catchState = useSelector(selectCatch);

  const pokemonDetails = pokemon?.details;

  return (
    <div
      className={`pokemonBanner ${catchState.catchReady && "pokemonBanner--catchMode"} bg-${
        pokemonDetails?.types[0].type.name
      }-light`}
    >
      <div className="pokemonBanner__imageContainer">
        {pokemonDetails && (
          <img
            className={`pokemonBanner__image ${
              catchState.isCatching && "pokemonBanner__image--catching"
            }`}
            alt=""
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetails?.id}.png`}
          />
        )}
        <div
          className={`pokemonBanner__pokeballContainer ${
            catchState.catchReady && "pokemonBanner__pokeballContainer--catching"
          }`}
        >
          {catchState.catchReady && (
            <img
              className={`pokemonBanner__pokeballImage ${
                catchState.isCatching && "pokemonBanner__pokeballImage--catching"
              }`}
              alt=""
              src={require("../../assets/images/pokeball.svg")}
            />
          )}
        </div>
      </div>

      <span className="pokemonBanner__orderNumber">#{pokemonDetails?.order}</span>
      <span className="pokemonBanner__name">
        {isCatched && (
          <img
            className="pokemonBanner__isOwned"
            alt=""
            src={require("../../assets/images/pokeball.svg")}
          />
        )}
        {pokemonDetails?.name}
      </span>
      <div className="pokemonBanner__types">
        {pokemonDetails?.types.map((type, i) => (
          <TypeCard key={i} type={type.type.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonBanner;
