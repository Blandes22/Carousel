

const carousel = document.querySelector('.carousel-slide');
const carouselSlides = document.querySelectorAll('.slide');

const nxtBtn = document.querySelector('.next');
const prvBtn = document.querySelector('.prev');

let index = 0;
const length = carouselSlides[0].clientWidth;

carousel.style.transform = 'translateX(' + (-length * index) + 'px)';


nxtBtn.addEventListener('click', ()=> {
    index++;
    if (index > 3) {
        index = 0;
    }
    console.log(index);
    carousel.style.transform = 'translateX(' + (-length * index) + 'px)';
});  

prvBtn.addEventListener('click', ()=> {
    index--;
    if (index < 0) {
        index = 3;
    }
    console.log(index);
    carousel.style.transform = 'translateX(' + (-length * index) + 'px)';
});  