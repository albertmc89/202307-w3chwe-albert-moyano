class Component {
  element: Element;
  constructor(
    private readonly parentElement: Element,
    tag: string,
    className = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  public render(): void {
    this.parentElement.append(this.element);
  }

  public remove(): void {
    this.element.remove();
  }
}

export default Component;
