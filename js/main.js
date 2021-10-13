var elButton = document.querySelector('.header__humburger-menu');
var elHeader = document.querySelector('.header');

elButton.addEventListener('click', (evt) => {
    elHeader.classList.toggle('header--active')
});