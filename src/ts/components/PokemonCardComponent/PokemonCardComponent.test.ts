import { type PokemonProfile } from "../../types.js";
import PokemonCardComponent from "./PokemonCardComponent.js";

describe("Given a PokemoncardComponent component", () => {
  describe("When it receives a pokemon named 'charmander'", () => {
    test("Then it should show a 'charmander' inside a heading", () => {
      const container = document.createElement("div");
      const charmander: PokemonProfile = {
        id: 4,
        name: "charmander",
        pictureUrl: "",
        type: "",
      };

      const pokemonCardComponent = new PokemonCardComponent(
        container,
        charmander
      );
      pokemonCardComponent.render();

      const headingElement = container.querySelector("h2")!;

      expect(headingElement.textContent).toBe(charmander.name);
    });
  });
});
