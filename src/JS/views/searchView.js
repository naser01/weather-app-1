import {elements} from './base';
//import allArr from '../models/Search';
//import Search from '../models/Search';


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


