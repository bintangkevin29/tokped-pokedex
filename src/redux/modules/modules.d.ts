interface ModulesState {
  modules: {
    main: Modules[];
    others: Modules[];
  };
}

interface Modules {
  name: string;
  url: string;
  component: React.FC;
}
