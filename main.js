// Header & footer

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        // HTML header ici
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        // HTML footer ici
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

// Get to top button

let getToTop = document.getElementById("backToTop");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        getToTop.style.display = "block";
    } else {
        getToTop.style.display = "none";
    }
}