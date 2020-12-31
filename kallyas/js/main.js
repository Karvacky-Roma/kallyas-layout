
let headerNav = document.querySelector('.header__menu');
let headerBurger = document.querySelector('.header__burger');
let bodyLock = document.querySelector('body');

headerBurger.addEventListener('click', function(evt) {
	evt.preventDefault();
	headerNav.classList.toggle('header-active');
	headerBurger.classList.toggle('header-active');
	bodyLock.classList.toggle('lock');
});