interface ModulesState {
  modules: Modules[];
}

interface Modules {
  name: string;
  url: string;
  component: React.FC;
}
