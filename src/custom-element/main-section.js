class MainSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="mainContent" tabindex="0">
            <section class="content">
            <article class="headline">
                <figure class="headline__figure">
                <figcaption>Rendang Sapi</figcaption>
                </figure>

                <div class="headline__content">
                <h1 class="headline__title">Nusantara Resto: Menyediakan Makanan Khas Indonesia</h1>
                <p class="headline__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt aliquam nisi sint quidem expedita libero fugiat, amet atque ad dicta quos odio facilis temporibus, esse vitae quis dignissimos iste.
                    Accusamus porro ex quo itaque repellendus consequuntur quas officiis. Iusto reiciendis ipsa a nemo vel minus consectetur, adipisci tempora dolorem natus ex dignissimos, non quasi sapiente quam provident earum veniam.
                </p>
                <button class="headline__button">Order</button>
                </div>
            </article>

            <div class="latest">
                <h1 class="latest__label">Nusantara Resto</h1>
            </div>
            </section>
        </main>`;
  }
}

customElements.define('main-section', MainSection);
