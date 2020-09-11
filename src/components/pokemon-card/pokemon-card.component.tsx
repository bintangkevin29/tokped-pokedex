import React, { useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import { addPokemonDetails } from "../../redux/pokemons/pokemons.actions";

import { MyPokemons } from "../../redux/my-pokemons/my-pokemons";

import { fetchPokemonData } from "../../lib/utils";

import TypeCard from "../type-card";


import "./pokemon-card.style.scss";

interface Props {
  pokemonData: MyPokemons;
}

const PokemonCard: React.FC<Props> = ({ pokemonData }) => {
  const pokemon = useSelector(selectPokemonByName(pokemonData.name));

  const pokemonDetails = pokemon?.details;

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const res = await fetchPokemonData(pokemonData.name);
      dispatch(addPokemonDetails(res));
    };
    if (!pokemonDetails) {
      fetchPokemonDetail();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link
      to={`/details/${pokemonDetails && pokemonDetails?.name}`}
      className={`pokemonCard ${
        pokemonDetails ? "bg-" + pokemonDetails.types[0].type.name + "-light" : ""
      }`}
    >
      {pokemonDetails && (
        <Fragment>
          <div className="pokemonCard__details">
            <span className="pokemonCard__orderNumber">#{pokemonDetails.order}</span>
            <span className="pokemonCard__name">
              {pathname === "/my-pokemons" ? pokemonData.nickname : pokemonDetails.forms[0].name}
            </span>
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
    </Link>
  );
};

export default PokemonCard;
