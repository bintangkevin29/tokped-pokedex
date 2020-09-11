import { NamedApiResources } from "../../global";

export interface PokemonState {
  pokedex: PokemonList[];
  myPokemon: PokemonList[];
}

export interface PokemonList {
  name: string;
  url: string;
  details?: PokemonDetails;
  species?: PokemonSpecies;
  evolution?: PokemonEvolution;
}

export interface MyPokemonState extends PokemonList {
  nickname: string;
}

export type PokemonActions =
  | {
      type: "POKEMON_POKEDEX_APPEND";
      payload: PokemonList[];
    }
  | {
      type: "POKEMON_POKEDEX_DETAIL_ADD";
      payload: PokemonFetchedData;
    }
  | {
      type: "POKEMON_MYPOKEMON_APPEND";
      payload: PokemonList;
    };

export interface PokemonFetchedData {
  details: PokemonDetails;
  species: PokemonSpecies;
  evolution: PokemonEvolution;
}

export interface PokemonDetails {
  abilities: {
    ability: NamedApiResources;
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

interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: NamedApiResources;
  egg_groups: NamedApiResources[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: NamedApiResources | null;
  flavor_text_entries: {
    flavor_text: string;
    language: NamedApiResources;
    version: NamedApiResources;
  }[];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: NamedApiResources;
  }[];
  generation: NamedApiResources;
  growth_rate: NamedApiResources;
  habitat: NamedApiResources;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: NamedApiResources;
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: NamedApiResources;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedApiResources;
  }[];
  shape: NamedApiResources;
  varieties: {
    is_default: boolean;
    pokemon: NamedApiResources;
  }[];
}

interface PokemonEvolution {
  baby_trigger_item: NamedApiResources | null;
  chain: EvolutionChain;
  id: number;
}

interface EvolutionChain {
  evolution_details: EvolutionDetails[] | [];
  evolves_to: EvolutionChain[];
  is_baby: boolean;
  species: NamedApiResources;
}

interface EvolutionDetails {
  gender: number;
  held_item: NamedApiResources | null;
  item: NamedApiResources | null;
  known_move: NamedApiResources | null;
  known_move_type: NamedApiResources | null;
  location: NamedApiResources | null;
  min_affection: number;
  min_beauty: number;
  min_happiness: number;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: NamedApiResources | null;
  party_type: NamedApiResources | null;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedApiResources | null;
  trigger: NamedApiResources | null;
  turn_upside_down: boolean;
}

export interface PokemonEvolutionNew {
  url: string;
  sprites: string;
  name: string;
  minLevel: int;
}
