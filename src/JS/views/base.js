export const  elements = {
    searchForm: document.querySelector('.search'),
    searchVal: document.getElementById('search__val'),
    searchBtn: document.getElementById('search-btn')
};


export const loader = () => {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.btn-right');
    const prevButton = document.querySelector('.btn-left');


    const slideWidth = slides[0].getBoundingClientRect().width;


    const setSlidePosition = ((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current__slide');
        targetSlide.classList.add('current__slide');
    }

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current__slide');
        const nextSlide = currentSlide.nextElementSibling;

        moveToSlide(track, currentSlide, nextSlide);
    });
    
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current__slide');
        const prevSlide = currentSlide.previousElementSibling;

        moveToSlide(track, currentSlide, prevSlide);
    });
}




