import {elements} from './base';

export const getInput = () => elements.searchVal.value;

export const clearSearch = () => {
    elements.searchVal.value = '';
};

export const renderWeather = (result) => {
    const markup = `
        <li class="carousel__slider">
            <div class="carousel_left_part">
                
            </div>
            <div class="class="carousel_right_part">
                
            </div>
        </li>
    `;
};
