document.querySelector('.menu__hamburger').onclick = function(){
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('header--active');
    document.querySelector('.menu__list').classList.toggle('list--visible');
    document.querySelector('.signup-btn').classList.toggle('visible');
}