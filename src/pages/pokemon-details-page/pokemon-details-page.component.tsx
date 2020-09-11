import React, { useEffect, Fragment } from "react";

import "./pokemon-details-page.style.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import { addPokemonDetails } from "../../redux/pokemons/pokemons.actions";
import CustomSpinner from "../../components/custom-spinner";
import PokemonBanner from "../../components/pokemon-banner";
import PokemonData from "../../components/pokemon-data";
import { fetchPokemonData } from "../../lib/utils";

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
        </Fragment>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
};

export default PokemonDetailsPage;
