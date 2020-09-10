import PokedexPage from "../../pages/pokedex-page";
import BottomNav from "../../components/bottom-nav";

const INIT_STATE: ModulesState = {
  modules: [
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
};

const moduleReducer = (state = INIT_STATE) => {
  return state;
};

export default moduleReducer;
