import React, { useEffect, Fragment } from "react";

import "./pokemon-details-page.style.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import Axios from "axios";
import { addPokemonDetails } from "../../redux/pokemons/pokemons.actions";
import { baseUrl } from "../../lib/constant";
import CustomSpinner from "../../components/custom-spinner";
import PokemonBanner from "../../components/pokemon-banner";

const PokemonDetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const pokemonDetails = useSelector(selectPokemonByName(name));
  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const res = await Axios(`${baseUrl}/pokemon/${name}`);
      dispatch(addPokemonDetails(res.data));
    };
    if (!pokemonDetails) {
      fetchPokemonDetail();
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pokemonDetailsPage">
      {pokemonDetails ? (
        <Fragment>
          <PokemonBanner/>

        </Fragment>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
};

export default PokemonDetailsPage;
