class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Menuju ke konten</a>
        <header class="header">
            <div class="header__inner">
                <button id="menu" class="header__menu">☰</button>
            </div>
            <nav id="drawer" class="nav">
            <ul class="nav__list">
             <h1 class="nav__item">Nusantara Resto</h1>
                <li class="nav__item"><a href="#/home">Home</a></li>
                <li class="nav__item"><a href="#/like">Favorite</a></li>
                <li class="nav__item"><a href="https://www.linkedin.com/in/ali-ma-ruf-iskandar-64a498313/">About Us</a></li>
            </ul>
            </nav>
        </header>`;
  }
}

customElements.define('header-bar', HeaderBar);
