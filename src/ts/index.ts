import AppComponent from "./components/AppComponent/AppComponent.js";

const appContainer = document.querySelector(".container");

if (!appContainer) {
  throw new Error("Missing container");
}

const appComponent = new AppComponent(appContainer);
appComponent.render();
