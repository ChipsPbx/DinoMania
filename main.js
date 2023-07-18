// Header & footer

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="mainHeader">
        <figure id="logo" class="headerBlock">
            <a href="./index.html">
                <img src="./images/logo-dinomania-w.png" alt="logo" id="dinomania" />
            </a>
        </figure>
        <form action="" class="headerBlock">
            <input type="search" name="search" id="search" placeholder="Trouvez le dino de vos rêves..." />
        </form>
        <figure id="icon" class="headerBlock">
            <a href="/account.html">
                <img src="./icons/Icon_profil.png" alt="login" />
            </a>
            <a href="/cart.html">
                <img src="./icons/panier.png" alt="shop" />
            </a>
        </figure>
        </header>
        <nav id="mainNav">
                <ul>
                    <li><a href="#">Nouveautés</a></li>
                    <li><a href="/cat-dinos.html">Dinosaures</a></li>
                    <li><a href="/cat-accessories.html">Accessoires</a></li>
                    <li><a href="/cat-food.html">Nourriture</a></li>
                </ul>
        </nav>
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