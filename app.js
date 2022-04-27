function ResizeCarousel(h,w) {
    for (let i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].style.height = h + 'px';
    carouselSlides[i].style.width = w + 'px';
    }
}
function PositionSlide(w, index) {
    carousel.style.transform = 'translateX(' + (-w * index) + 'px)';
}


const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel-slide');
const carouselSlides = document.querySelectorAll('.slide');

const nxtBtn = document.querySelector('.next');
const prvBtn = document.querySelector('.prev');

let index = 0;

let height = carouselContainer.clientHeight;
let width = carouselContainer.clientWidth;

ResizeCarousel(height, width);

carousel.style.transform = 'translateX(' + (-length * index) + 'px)';

window.addEventListener('resize', function(event) {
    height = carouselContainer.clientHeight;
    width = carouselContainer.clientWidth;
    ResizeCarousel(height, width);
    PositionSlide(width, index);
}, true);


nxtBtn.addEventListener('click', ()=> {
    index++;
    if (index > 3) {
        index = 0;
    }
    PositionSlide(width, index);
});  

prvBtn.addEventListener('click', ()=> {
    index--;
    if (index < 0) {
        index = 3;
    }
    PositionSlide(width, index);
});  