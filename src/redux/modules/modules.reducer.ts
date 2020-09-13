import PokedexPage from "../../pages/pokedex-page";
import MyPokemonPage from "../../pages/my-pokemon-page";
import PokemonDetailsPage from "../../pages/pokemon-details-page";

export const INIT_STATE: ModulesState = {
  modules: {
    main: [
      {
        name: "Pokèdex",
        url: "/",
        component: PokedexPage,
      },
      {
        name: "My Pokèmons",
        url: "/my-pokemons",
        component: MyPokemonPage,
      },
    ],
    others: [
      {
        name: "Pokèmon Details",
        url: "/details/:name",
        component: PokemonDetailsPage,
      },
    ],
  },
};

const moduleReducer = (state = INIT_STATE) => {
  return state;
};

export default moduleReducer;
