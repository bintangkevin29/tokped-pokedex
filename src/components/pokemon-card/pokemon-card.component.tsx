import React, { useState, useEffect, Fragment } from "react";

import "./pokemon-card.style.scss";
import useFetch from "../../lib/use-fetch";

import "./pokemon-card.style.scss";
import { PokemonDetails } from "../../redux/pokemons/pokemons";
import TypeCard from "../type-card";

interface Props {
  pokemonDetailUrl: string;
}

const PokemonCard: React.FC<Props> = ({ pokemonDetailUrl }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | undefined>(undefined);

  const pokemonFetch = useFetch(pokemonDetailUrl);

  useEffect(() => {
    if (!pokemonDetails && pokemonFetch.response) {
      setPokemonDetails(pokemonFetch.response);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonFetch]);

  return (
    <div
      className={`pokemonCard ${
        pokemonDetails ? "bg-" + pokemonDetails.types[0].type.name + "-light" : ""
      }`}
    >
      {pokemonDetails && (
        <Fragment>
          <div className="pokemonCard__details">
            <span className="pokemonCard__orderNumber">#{pokemonDetails.order}</span>
            <span className="pokemonCard__name">{pokemonDetails.forms[0].name}</span>
            <div className="pokemonCard__types">
              {pokemonDetails.types.map((type, i) => (
                <TypeCard key={i} type={type.type.name} />
              ))}
            </div>
          </div>
          <div className="pokemonCard__sprite">
            <img alt="" src={pokemonDetails.sprites.front_default}></img>
            <img
              className="pokemonCard__backgroundImage"
              alt=""
              src={require("../../assets/images/pokemon.svg")}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PokemonCard;
