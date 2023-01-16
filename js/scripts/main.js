//--------------------------------------------------------------------------------------
//SLIDES
//--------------------------------------------------------------------------------------
var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal',
    },
    1150: {
      direction: 'vertical',
    }
  }
});

//--------------------------------------------------------------------------------------
//PROGRESS BAR DENTRO DE UM SLIDE COM SWIPER
//--------------------------------------------------------------------------------------

const progressSlide = document.querySelector('.js-progress')

var slide_hero = new Swiper(".slide-principal", {
  effect: "fade",
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init: function() {
      progressSlide.classList.remove('animate')
      progressSlide.classList.remove('active')
      progressSlide.classList.add('animate')
      progressSlide.classList.add('active')
    },
    slideChangeTransitionStart: function() {
      progressSlide.classList.remove('animate')
      progressSlide.classList.remove('active')
      progressSlide.classList.add('active')

    },
    slideChangeTransitionEnd: function() {
      progressSlide.classList.add('animate')
    }
  }
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

    //Adiciona active em js-nav-games > li > a, apenas no clicado
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

//--------------------------------------------------------------------------------------
//MODAL MOBILE
//--------------------------------------------------------------------------------------
const btnOpenModalMobileMenu = document.querySelector(".js-open-modal-mobile-menu");
const btnClosedModalMobileMenu = document.querySelector(".js-closed-modal-mobile-menu");

btnOpenModalMobileMenu.addEventListener("click", (event) => {
  event.preventDefault();
  let tagHtml = document.documentElement;
  tagHtml.classList.add("show-modal-mobile-menu");
});
btnClosedModalMobileMenu.addEventListener("click", (event) => {
  event.preventDefault();
  let tagHtml = document.documentElement;
  tagHtml.classList.remove("show-modal-mobile-menu");
});

//--------------------------------------------------------------------------------------
//MODAL LOGIN MOBILE
//--------------------------------------------------------------------------------------
const btnOpenLoginMobile = document.querySelector(".js-open-login-mobile");
const btnOpenModalMobile = document.querySelector(".js-closed-login-mobile");

btnOpenLoginMobile.addEventListener("click", (event) => {
  event.preventDefault();
  let tagHtml = document.documentElement;
  tagHtml.classList.add("show-modal-login-mobile");
});
btnOpenModalMobile.addEventListener("click", () => {
  let tagHtml = document.documentElement;
  tagHtml.classList.remove("show-modal-login-mobile");
});

//--------------------------------------------------------------------------------------
//NAVEGAÇÃO POR TABS COMPLETO - MENU
//--------------------------------------------------------------------------------------
const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuHeader = document.querySelectorAll('.js-menu');
const closeMenu = document.querySelectorAll('.js-close-sports-menu')

btnMenu.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    menuHeader.forEach(itemMenu => {
      itemMenu.classList.remove('active');
      itemMenu.addEventListener('mouseleave', () => {        
        itemMenu.classList.remove('active');
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active')
        })
        closeMenu.forEach(itemClose => {
          itemClose.addEventListener("click", (event) => {
            event.preventDefault();
            itemClose.classList.remove('active')
          })
          console.log("clicou no botao")
        })
      })
    })

    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active')
    })
    
    btn.classList.add('active');
    menuHeader[index].classList.add("active");
  })
})

//--------------------------------------------------------------------------------------
//NAVEGAÇÃO POR TABS COMPLETO MOBILE - MENU
//--------------------------------------------------------------------------------------
const btnMenuMobile = document.querySelectorAll('.js-btn-menu-mobile');
const menuHeaderMobile = document.querySelectorAll('.js-menu-mobile');

btnMenuMobile.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    menuHeaderMobile.forEach(itemMenu => {
      itemMenu.classList.remove('active');
      itemMenu.addEventListener('mouseleave', () => {        
        itemMenu.classList.remove('active');
        btnMenuMobile.forEach(itemBtn => {
          itemBtn.classList.remove('active')
        })
      })
    })

    btnMenuMobile.forEach(itemBtn => {
      itemBtn.classList.remove('active')
    })
    
    btn.classList.add('active');
    menuHeaderMobile[index].classList.add("active");
  })
})
