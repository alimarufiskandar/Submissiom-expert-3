class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
            </div>
        </div>`;
  }
}

customElements.define('hero-element', HeroElement);
