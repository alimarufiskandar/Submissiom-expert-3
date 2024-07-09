class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>@2024 Ali Maruf Iskandar Nusantara Resto</p>
        </footer>`;
  }
}

customElements.define('footer-bar', FooterBar);
