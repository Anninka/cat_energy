
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
const skinnyCat = document.querySelector('.example__image--skinny-cat');
const separator = document.querySelector('.range-controls__input');
const imageContainer = document.querySelector('.example__images');
let flag = false;

if(document.querySelector('.example__image--fat-cat')) {

  separator.addEventListener('click', function(evt) {
    evt.preventDefault();
    flag = true;
  }, false);

  document.addEventListener('mouseup', function() {
    flag = false;
  }, false);

  imageContainer.addEventListener('mousemove', function(evt) {
    let res = evt.pageX - this.offsetLeft;
    if (flag && (res > 0) && (res < skinnyCat.offsetWidth)) {
      separator.style.left = separator.value + '%';
      fatCat.style.width = separator.value + '%';
    }
  }, false);

  //Кнопки переключения изображений

  const skinnyCatImage = document.querySelector('.example__image--skinny-cat');
  const fatCatImage = document.querySelector('.example__image--fat-cat');
  const buttonAfter = document.querySelector('.example__mobile-button--after');
  const buttonBefore = document.querySelector('.example__mobile-button--before');
  const button = document.querySelector('.example__mobile-button');

  buttonAfter.addEventListener('click', function () {
    skinnyCatImage.style.display = "block";
    fatCatImage.style.display = "none";
    buttonBefore.style.display = "block";
    buttonAfter.style.display = "none";
  })

  buttonBefore.addEventListener('click', function () {
    skinnyCatImage.style.display = "none";
    fatCatImage.style.display = "block";
    buttonAfter.style.display = "block";
    buttonBefore.style.display = "none";
  })

}
