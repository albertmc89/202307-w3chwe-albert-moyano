import pokemonListData from "./pokemonListData.js";

pokemonListData()
  .then((pokeList) => {
    console.log(pokeList);
  })
  .catch((error) => {
    console.log(error);
  });
