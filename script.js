class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list a",
  );
  mobileNavbar.init();



  function alternarDicas() {
    const dicas = [
        "Beba bastante água diariamente.",
        "Inclua frutas e vegetais na sua dieta.",
        "Evite alimentos processados e açucarados.",
        "Pratique atividade física regularmente.",
        "Durma o suficiente para manter um metabolismo saudável."
    ];

    const listaDicas = document.getElementById("dicas-lista");
    const botao = document.getElementById("botao-dicas");

    if (listaDicas.classList.contains("mostrar")) {
        // Esconder dicas
        listaDicas.classList.remove("mostrar");
        botao.textContent = "Mostrar Dicas";
        listaDicas.innerHTML = ""; 
    } else {
        // Mostrar dicas
        dicas.forEach(dica => {
            const item = document.createElement("li");
            item.textContent = dica;
            listaDicas.appendChild(item);
        });
        listaDicas.classList.add("mostrar");
        botao.textContent = "Esconder Dicas";
    }
}