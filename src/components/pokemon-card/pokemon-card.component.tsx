import React, { useState, useEffect, Fragment } from "react";

import "./pokemon-card.style.scss";
import useFetch from "../../lib/use-fetch";

import { PokemonDetails } from "../../redux/pokemons/pokemons";
import TypeCard from "../type-card";
import { NamedApiResources } from "../../global";
import { useSelector, useDispatch } from "react-redux";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import Axios from "axios";
import { addPokemonDetails } from "../../redux/pokemons/pokemons.actions";

interface Props {
  pokemonData: NamedApiResources;
}

const PokemonCard: React.FC<Props> = ({ pokemonData }) => {
  const pokemonDetails = useSelector(selectPokemonByName(pokemonData.name));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const res = await Axios(pokemonData.url);
      dispatch(addPokemonDetails(res.data));
    };
    if (!pokemonDetails) {
      fetchPokemonDetail();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <img
              className="pokemonCard__pokemonSprite"
              alt=""
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetails.id}.png`}
            ></img>
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
