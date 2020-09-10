import PokedexPage from "../../pages/pokedex-page";
import BottomNav from "../../components/bottom-nav";
import PokemonDetailsPage from "../../pages/pokemon-details-page";

const INIT_STATE: ModulesState = {
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
        component: BottomNav,
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
