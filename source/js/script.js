
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// слайдер планшетный и десктопный

const fatCat = document.querySelector('.example__image--fat-cat');
const skinnyCat = document.querySelector('.example__image--skinnycat');
const separator = document.querySelector('.range-controls__input');
const imageContainer = document.querySelector('.example__images');
let flag = false;

separator.addEventListener('click', function(evt) {
  evt.preventDefault();
  flag = true;
}, false);

document.addEventListener('onchange', function() {
  flag = false;
}, false);

imageContainer.addEventListener('oninput', function(evt) {
  let res = evt.pageX - this.offsetLeft;
  if (flag && (res > 0) && (res < skinnyCat.offsetWidth)) {
    separator.style.left = res + 'px';
    fatCat.style.width = res + 'px';
  }
}, false);

// let catComparisonBlockBefore=document.querySelector("#catComparisonBlockBefore"),
// catComparisonRange=document.querySelector("#catComparisonRange");

// catComparisonRange.addEventListener("input",(function(a){catComparisonBlockBefore.style.width=catComparisonRange.value+"%"}));let mobileToggleCatComparison=document.querySelector("#mobileToggleCatComparison");mobileToggleCatComparison.addEventListener("click",(function(a){"100%"===catComparisonBlockBefore.style.width?catComparisonBlockBefore.style.width="0%":catComparisonBlockBefore.style.width="100%"}));
