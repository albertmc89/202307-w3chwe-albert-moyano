export interface PokemonListResponse {
  results: Pokemon[];
  previous: string;
  next: string;
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
  sprites: { other: { dream_world: { front_default: string } } };
  types: [{ type: { name: string } }];
}

export interface ComponentStructure {
  render: () => void;
  remove: () => void;
}
