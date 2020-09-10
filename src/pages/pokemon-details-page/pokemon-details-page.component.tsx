import React, { useEffect } from "react";

import "./pokemon-details-page.style.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import Axios from "axios";
import { addPokemonDetails } from "../../redux/pokemons/pokemons.actions";
import { baseUrl } from "../../lib/constant";
import CustomSpinner from "../../components/custom-spinner";

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
  }, []);

  return pokemonDetails ? <div className="pokemonDetailsPage">Tes</div> : <CustomSpinner />;
};

export default PokemonDetailsPage;
