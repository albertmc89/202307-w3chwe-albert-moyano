import AppComponent from "./components/AppComponent/AppComponent.js";
import pokemonListData from "./pokemonListData.js";

const appContainer = document.querySelector(".container");

if (!appContainer) {
  throw new Error("Missing container");
}

const appComponent = new AppComponent(appContainer);
appComponent.render();

pokemonListData()
  .then((pokeList) => {
    console.log(pokeList);
  })
  .catch((error) => {
    console.log(error);
  });
