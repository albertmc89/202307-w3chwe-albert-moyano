import { type PokemonProfile } from "../../types";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  constructor(
    parentElement: Element,
    private readonly singlePokemon: PokemonProfile
  ) {
    super(parentElement, "article");
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `
      <h2 class="pokemon__name">${this.singlePokemon.name}</h2>
      <img src="${this.singlePokemon.pictureUrl}" alt="${this.singlePokemon.name}">
    `;
  }
}

export default PokemonCardComponent;
