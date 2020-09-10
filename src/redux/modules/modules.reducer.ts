import PokedexPage from "../../pages/pokedex-page";

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
      component: PokedexPage,
    },
  ],
};

const moduleReducer = (state = INIT_STATE) => {
  return state;
};

export default moduleReducer;
