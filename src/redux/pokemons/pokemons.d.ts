import { NamedApiResources } from "../../global";

export interface PokemonState {
  pokedex: PokemonList[];
  myPokemons: PokemonList[];
}

export interface PokemonList {
  name: string;
  url: string;
}

export type PokemonActions = {
  type: "POKEMON_POKEDEX_APPEND";
  payload: PokemonList[];
};

export interface PokemonDetails {
  abilities: {
    ability: NamedApiResources[];
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: NamedApiResources[];

  game_indices: {
    game_index: number;
    version: NamedApiResources[];
  }[];
  height: number;
  held_items: [];

  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: NamedApiResources[];
    version_group_details: {
      level_learned_at: number;
      move_learn_method: NamedApiResources;
      version_group: NamedApiResources;
    }[];
  }[];

  name: string;
  order: number;
  species: NamedApiResources;

  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      official_artwork: {
        front_default: string;
      };
    };
  };
  stats: { base_stat: number; effort: number; stat: NamedApiResources }[];
  types: {
    slots: number;
    type: NamedApiResources;
  }[];
  weight: number;
}
