import Axios from "axios";
import { baseUrl } from "./constant";

export const fetchPokemonData = async (name: string) => {
  const fetchedDetails = await Axios(`${baseUrl}/pokemon/${name}`);
  const fetchedSpecies = await Axios(`${baseUrl}/pokemon-species/${name}`);

  const resDetails = fetchedDetails.data;
  const resSpecies = fetchedSpecies.data;

  return { details: resDetails, species: resSpecies };
};
