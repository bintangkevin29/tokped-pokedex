import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import { addPokemonDetails } from "../../redux/pokemons/pokemons.actions";

import { fetchPokemonData } from "../../lib/utils";

import CustomSpinner from "../../components/custom-spinner";
import PokemonBanner from "../../components/pokemon-banner";
import PokemonData from "../../components/pokemon-data";

import "./pokemon-details-page.style.scss";
import Pokeball from "../../components/pokeball";

const PokemonDetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  const pokemonDetails = useSelector(selectPokemonByName(name));

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
      {pokemonDetails ? (
        <Fragment>
          <PokemonBanner />
          <PokemonData />
          <Pokeball />
        </Fragment>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
};

export default PokemonDetailsPage;
