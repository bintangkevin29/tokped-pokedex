import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import { selectMyPokemonsByName } from "../../redux/my-pokemons/my-pokemons.selector";
import { selectCatch } from "../../redux/catch/catch.selector";
import { addPokemonDetails } from "../../redux/pokemons/pokemons.actions";

import { fetchPokemonData, capitalizeFirstLetter } from "../../lib/utils";

import CustomSpinner from "../../components/custom-spinner";
import PokemonBanner from "../../components/pokemon-banner";
import PokemonData from "../../components/pokemon-data";

import Pokeball from "../../components/pokeball";

import "./pokemon-details-page.style.scss";

const PokemonDetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  const pokemonDetails = useSelector(selectPokemonByName(name));

  const isCatched = useSelector(selectMyPokemonsByName(name));

  const catchState = useSelector(selectCatch);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const res = await fetchPokemonData(name);
      dispatch(addPokemonDetails(res));
    };

    if (!pokemonDetails?.details || !pokemonDetails?.species) {
      fetchPokemonDetail();
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className="pokemonDetailsPage">
      <Helmet>
        <title>{capitalizeFirstLetter(name)} &ndash; Pokèdex</title>
      </Helmet>
      {pokemonDetails ? (
        <Fragment>
          <PokemonBanner />
          {!isCatched && <Pokeball />}
          {!catchState.catchReady && <PokemonData />}
        </Fragment>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
};

export default PokemonDetailsPage;
