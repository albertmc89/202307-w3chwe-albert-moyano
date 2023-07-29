import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `
      <header class="main-header">
        <img src="img/pokemon-logo.svg"/>
      </header>
      <main class="main">
        <ul class="pokemon">
        </ul>
      </main>
    `;
  }
}

export default AppComponent;
