var navHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

navHeader.classList.remove('header--nojs');

headerToggle.onclick = function() {
navHeader.classList.toggle('header--opened');
};
