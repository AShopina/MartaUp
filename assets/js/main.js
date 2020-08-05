
// code for menu__hamburger
document.querySelector('.menu__hamburger').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('header--active');
    document.querySelector('.menu__list').classList.toggle('list--visible');
    document.querySelector('.signup-btn').classList.toggle('visible');
};



// code for slider
let pagination = document.querySelector('.pagination');
let points = document.querySelectorAll('.pagination-item__point');
let pointsArray = Array.from(points);
let targetPoint;
let numActivePoint;

pagination.addEventListener('click', target);
pagination.addEventListener('click', slider);

function target(event) {
    targetPoint = event.target;
    if (!targetPoint.classList.contains('pagination-item__point')) return;
    activePoint(targetPoint);
}

function activePoint() {
    targetPoint.classList.add('point-active');
    points.forEach((point) => {
        if (point != targetPoint) point.classList.remove('point-active');
    });
    numOfPoint(targetPoint);
}

function numOfPoint(targetPoint) {
    numActivePoint = pointsArray.indexOf(targetPoint);
    return numActivePoint;
}

function slider() {
    let slides = document.querySelector('.slides-wrapper');
    let sliderLeft = -numActivePoint * 100;
    slides.style['margin-left'] = sliderLeft + "%";
}