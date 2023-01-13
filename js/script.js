const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let search = document.querySelector('.search__form');
let main = document.querySelector('main');
let clearSearch = document.querySelector('.search__img-close')

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop__scroll');
  }
)

menuLinks.forEach(
  function(el) {
    el.addEventListener('click',
      function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop__scroll');
      }
    )
  }
)

search.addEventListener('click',
  function() {
    search.classList.add('search--active');
  }
);

main.addEventListener('click',
  function() {
    search.classList.remove('search--active');
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop__scroll');
  }
);

document.getElementById("search__img-close").onclick = function(e) {
  document.getElementById("search__input").value = "";
}

