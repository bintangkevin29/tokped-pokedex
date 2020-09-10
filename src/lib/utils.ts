import Axios from "axios";
import { baseUrl } from "./constant";

export const fetchPokemonData = async (name: string) => {
  const fetchedDetails = await Axios(`${baseUrl}/pokemon/${name}`);
  const fetchedSpecies = await Axios(`${baseUrl}/pokemon-species/${name}`);
  const fetchedEvolution = await Axios(`${baseUrl}/evolution-chain/${fetchedDetails.data.id}`);
  
  const resDetails = fetchedDetails.data;
  const resSpecies = fetchedSpecies.data;
  const resEvolution = fetchedEvolution.data;

  return { details: resDetails, species: resSpecies, evolution: resEvolution };
};
