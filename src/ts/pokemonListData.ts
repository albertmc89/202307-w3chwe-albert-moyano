import apiUrlPokemonList from "./globals.js";
import { type PokemonListResponse, type PokemonResponseData } from "./types";

const pokemonListData = async () => {
  const pokemonListDataResponse = await fetch(apiUrlPokemonList);
  const { results: listResponse } =
    (await pokemonListDataResponse.json()) as PokemonListResponse;

  const pokeList = listResponse.map(async (pokemon) => {
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonData = (await pokemonResponse.json()) as PokemonResponseData;

    return pokemonData;
  });

  const pokeListResolved = await Promise.all(pokeList);

  const pokeResolvedProfile = pokeListResolved.map((pokeListResolved) => ({
    id: pokeListResolved.id,
    name: pokeListResolved.name,
    pictureUrl: pokeListResolved.sprites.other.dream_world.front_default,
    type: pokeListResolved.types[0].type.name,
  }));

  return pokeResolvedProfile;
};

export default pokemonListData;
