// Header & footer

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="mainHeader" class="container-fluid">
        <nav class="d-flex justify-content-between align-items-center ">
            <figure class="bloc logo">
                <a href="./index.html"><img src="images/logo-dinomania-w.png" alt="" id="dinomania" class=""></a>
            </figure>
            <form action="" class="w-100 d-flex justify-content-center bloc">
                <input type="search" placeholder="Touvez le dinosaure de vos rêves..." class="w-75">
            </form>
            <div id="mainHeaderIcons" class="d-flex bloc" >
                <a href="./account.html"><img src="icons/Icon_profil.png" alt="Icône compte client"></a>
                <a href="./cart.html"><img src="icons/panier.png" alt="Icône panier"></a>
            </div>
        </nav>
    </header>
    <nav id="mainNav">
        <ul>
            <li><a href="#">Nouveautés</a></li>
            <li><a href="./cat-dinos.html">Dinosaures</a></li>
            <li><a href="./cat-accessories.html">Accessoires</a></li>
            <li><a href="./cat-care.html">Care</a></li>
        </ul>
    </nav>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="mainFooter">
        <section id="mainFooterContainer">
            <figure id="mainFooterLogo">
                <img src="images/logo-dinomania-w.png" alt="Logo DinoMania">
            </figure>
            <nav id="mainFooterNav">
                <div class="mainFooterBlock">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Plan du site</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="mainFooterBlock">
                    <h3>Légal</h3>
                    <ul>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="./cgv.html">CGV</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
                <div id="mainFooterSocial" class="mainFooterBlock">
                    <h3>Social</h3>
                    <div id="mainFooterIcons">
                        <figure>
                            <a href="https://twitter.com/" target="_blank"><img src="icons/icon-twitter.svg" alt="Logo Twitter"></a>
                        </figure>
                        <figure>
                            <a href="https://www.instagram.com/" target="_blank"><img src="icons/icon-instagram.svg" alt="Logo Instagram"></a>
                        </figure>
                        <figure>
                            <a href="https://www.youtube.com/" target="_blank"><img src="icons/icon-yt.svg" alt="Logo YouTube"></a>
                        </figure>
                    </div>
                </div>
            </nav>
        </section>
    </footer>
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