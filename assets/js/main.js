document.querySelector('.menu__hamburger').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('header--active');
    document.querySelector('.menu__list').classList.toggle('list--visible');
    document.querySelector('.signup-btn').classList.toggle('visible');
};


// document.querySelector('.pagination').onclick = slider;
// let left = 0;

// function slider() {
//   let slides = document.querySelector('.slides-wrapper');

//   left = left - 100;
//   if (left < -400) {
//     left = 0;
//   }
//   slides.style['margin-left'] = left + "%";
// }

let pagination = document.querySelector('.pagination');
let points = document.querySelectorAll('.pagination-item__point');
let pointsArray = Array.from(points);
let targetPoint;

pagination.onclick = function (event) {
    targetPoint = event.target;
    if (!targetPoint.classList.contains('pagination-item__point')) return;
    activePoint(targetPoint);
}

function activePoint () {
    targetPoint.classList.add('point-active');
    for (let point of pointsArray) {
        if(point != targetPoint) point.classList.remove('point-active');
    }
}
// function numOfPoint() {
//     for (let i = 0; i < pointsArray.length; i++) {
//         pointsArray[i].addEventListener('click', function (e) {
//             activePoint = pointsArray.indexOf(e.target);
//         
//     }
//     return activePoint;
// }

function slider(event) {   

    // let slides = document.querySelector('.slides-wrapper');
    // let sliderLeft = -(activePoint) * 100;
    // slides.style['margin-left'] = sliderLeft + "%";
}