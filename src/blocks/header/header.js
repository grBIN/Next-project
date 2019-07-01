const pageHeader  = document.querySelector('.page-header'),
        burgerBtn = document.querySelector('.burger-btn'),
        burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-btn--close');
    pageHeader.classList.toggle('page-header--open');
});