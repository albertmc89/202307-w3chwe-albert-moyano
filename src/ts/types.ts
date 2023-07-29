export interface PokemonListResponse {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonProfile {
  name: string;
  pictureUrl: string;
  type: string;
  id: number;
}

export interface PokemonResponseData {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: [{ type: { name: string } }];
}

export interface ComponentStructure {
  render: () => void;
  remove: () => void;
}
