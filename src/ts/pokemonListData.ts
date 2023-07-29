import apiUrlPokemonList from "./globals.js";
import { type PokemonListResponse, type PokemonResponseData } from "./types";

const pokemonListData = async () => {
  const pokemonListDataResponse = await fetch(apiUrlPokemonList);
  const { results: listResponse } =
    (await pokemonListDataResponse.json()) as PokemonListResponse;

  console.log(listResponse);

  const pokeList = listResponse.map(async (pokemon) => {
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonData = (await pokemonResponse.json()) as PokemonResponseData;

    return pokemonData;
  });
  console.log(pokeList);
  const pokeListResolved = await Promise.all(pokeList);
  console.log(pokeListResolved);

  const pokeResolvedProfile = pokeListResolved.map((pokeListResolved) => ({
    id: pokeListResolved.id,
    name: pokeListResolved.name,
    pictureUrl: pokeListResolved.sprites.front_default,
    type: pokeListResolved.types[0].type.name,
  }));
  console.log(pokeResolvedProfile);
};

export default pokemonListData;
