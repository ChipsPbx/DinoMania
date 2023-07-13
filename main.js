class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        // Insérer HTML ici
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        // Insérer HTML ici
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);