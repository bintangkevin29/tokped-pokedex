const INIT_STATE: ModulesState = {
  modules: [
    {
      name: "Pokèdex",
      url: "/",
    },
    {
      name: "My Pokèmons",
      url: "/my-pokemons",
    },
  ],
};

const moduleReducer = (state = INIT_STATE) => {
  return state;
};

export default moduleReducer;
