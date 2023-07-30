import pokemonListData from "../../pokemonListData.js";
import { type PokemonProfile } from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class AppComponent extends Component {
  private singlePokemon: PokemonProfile[] = [];
  private readonly next: string;

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
      <div class= "buttons">
        <button class="previous">Previous</button>
        <span class="counter">0/100</span>
        <button class="next">Next</button>
      </div>
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

  private pageButton(): void {
    const nextButtonElement = this.element.querySelector(".next")!;

    nextButtonElement.addEventListener("click", async () => {
      // Const spanElement = this.element.querySelector(".counter")!;
      // const newPokemonPage = this.element.querySelector(this.next);
    });
  }
}

export default AppComponent;
