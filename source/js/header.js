var navHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

navHeader.classList.remove('header--nojs');

headerToggle.addEventListener('click', function() {
  if (navHeader.classList.contains('.header--closed')) {
    navHeader.classList.remove('.header--closed');
    navHeader.classList.add('.header--opened');
  } else {
    navHeader.classList.add('.header--closed');
    navHeader.classList.remove('.header--opened');
  }
});
