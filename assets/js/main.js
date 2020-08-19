// code for menu__hamburger
document.querySelector('.menu__hamburger').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('header--active');
    document.querySelector('.menu__list').classList.toggle('list--visible');
    document.querySelector('.signup-btn').classList.toggle('visible');
};




{
    // code for slider
    const pagination = document.querySelector('.pagination');
    const points = document.querySelectorAll('.pagination-item__point');
    let pointsArray = Array.from(points);
    let counter = 0;
    let targetPoint = pointsArray[counter];
    const slides = document.querySelector('.slides-wrapper');

    pagination.addEventListener('click', getTarget);

    function getTarget(event) {
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
        let numActivePoint = pointsArray.indexOf(targetPoint);
        slider(numActivePoint);
    }

    function slider(numActivePoint) {
        let sliderLeft = -numActivePoint * 100;
        slides.style.marginLeft = sliderLeft + "%";
    }


    // code for animation
    function animationSlider() {

        if (counter < 5) {
            targetPoint = pointsArray[counter++];
            setTimeout(animationSlider, 3000);
        } else {
            counter = 0;
            setTimeout(animationSlider, 3000);
        }
        activePoint(targetPoint);
    }
    animationSlider();
}