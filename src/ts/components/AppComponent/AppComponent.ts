import pokemonListData from "../../pokemonListData.js";
import { type PokemonProfile } from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class AppComponent extends Component {
  private singlePokemon: PokemonProfile[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
    (async () => {
      const pokemones: PokemonProfile[] = await pokemonListData();

      this.singlePokemon = pokemones;
      this.renderPokemonCards();
    })();
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `
      <header class="main-header">
        <img src="img/pokemon-logo.svg" class="title-image"/>
      </header>
      <main class="main-container">
        <ul class="pokemon-list">
        </ul>
      </main>
    `;
  }

  private renderPokemonCards() {
    const pokemonListElement = this.element.querySelector(".pokemon-list")!;
    this.singlePokemon.forEach((singlePokemon) => {
      const pokemonCardListElement = document.createElement("li");
      new PokemonCardComponent(pokemonCardListElement, singlePokemon).render();
      pokemonListElement.append(pokemonCardListElement);
    });
  }
}

export default AppComponent;
