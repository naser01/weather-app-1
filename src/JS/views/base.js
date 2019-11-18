export const  elements = {
    searchForm: document.querySelector('.search'),
    searchVal: document.getElementById('search__val'),
    searchBtn: document.getElementById('search-btn'),
    carouselTrackContainer: document.querySelector('.carousel__track_container')
};


export const carouselSlider = () => {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.btn-right');
    const prevButton = document.querySelector('.btn-left');
    

    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = ((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    slides.forEach(setSlidePosition);
    
    const hideShowButton = (slides, nextButton, prevButton, targetIndex) => {
        //const current = track.querySelector('.current__slide');
        
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            nextButton.classList.remove('is-hidden');
            prevButton.classList.remove('is-hidden');
        }
    }

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current__slide');
        targetSlide.classList.add('current__slide');
    }

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current__slide');
        const nextSlide = currentSlide.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide)

        moveToSlide(track, currentSlide, nextSlide);
        hideShowButton(slides, nextButton, prevButton, nextIndex);
    });
    
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current__slide');
        const prevSlide = currentSlide.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide)

        moveToSlide(track, currentSlide, prevSlide);
        hideShowButton(slides, nextButton, prevButton, prevIndex)
    });
}



export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = () => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    document.querySelector('.carousel__track').insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};

