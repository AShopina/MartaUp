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
let targetPoint = pointsArray[0];
let numActivePoint;
let slides = document.querySelector('.slides-wrapper');

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
    let sliderLeft = -numActivePoint * 100;
    slides.style['margin-left'] = sliderLeft + "%";
}


// code for animation
function animationSlider() {
    let offsetLeft = 0;
    let countPoint = 0;
    let step = 100;

    setTimeout(function go() {
        if (offsetLeft > (-(pointsArray.length - 1) * step) && (countPoint < pointsArray.length - 1)) {
            offsetLeft -= step;
            slides.style['margin-left'] = offsetLeft + "%";
            pointsArray[countPoint].classList.toggle('point-active');
            pointsArray[++countPoint].classList.toggle('point-active');
            setTimeout(go, 1000);
        } else {
            offsetLeft = 0;
            slides.style['margin-left'] = offsetLeft + "%";
            pointsArray[countPoint].classList.toggle('point-active');
            countPoint = 0;
            pointsArray[countPoint].classList.toggle('point-active');
            setTimeout(go, 1000);
        }
    }, 1000);
};

animationSlider();

