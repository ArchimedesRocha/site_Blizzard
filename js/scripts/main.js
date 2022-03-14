//--------------------------------------------------------------------------------------
//SLIDES
//--------------------------------------------------------------------------------------
var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
});

var slide_hero = new Swiper(".slide-principal", {
  effect: "fade",
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

//--------------------------------------------------------------------------------------
//NAVEGAÇÃO POR TABS
//--------------------------------------------------------------------------------------
// Função para Add e Retirar a classe dos links
const allFilters = document.querySelectorAll(".js-nav-games li a");

//Agora vamos ter que percorrer o array de links para podermos integrar a função de clicar no link automaticamente mudar a tab.
const tabPane = document.querySelectorAll(".tab-pane-games");

allFilters.forEach((filter, index) => {
  filter.addEventListener("click", (event) => {
    event.preventDefault();

    //Remove active de todos js-nav-games li a
    allFilters.forEach((item) => {
      item.classList.remove("active");
    });

    //Remove active de todos tab-pane-games
    tabPane.forEach((tab) => {
      tab.classList.remove("active");
    });

    //Percorre o array capturando o index de cada tab
    //Adiciona active em tab-pane-games apenas no clicado
    tabPane[index].classList.add("active");

    //Adiciona active em js-nav-games li a apenas no clicado
    filter.classList.add("active");
  });
});

//--------------------------------------------------------------------------------------
//MODAL LOGIN
//--------------------------------------------------------------------------------------
const btnOpenModal = document.querySelector(".js-open-modal");
const btnClosedModal = document.querySelector(".js-closed-modal");

btnOpenModal.addEventListener("click", (event) => {
  event.preventDefault();
  let tagHtml = document.documentElement;
  tagHtml.classList.add("show-modal");
});
btnClosedModal.addEventListener("click", () => {
  let tagHtml = document.documentElement;
  tagHtml.classList.remove("show-modal");
});
