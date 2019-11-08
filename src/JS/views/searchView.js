import {elements} from './base';

export const getInput = () => elements.searchVal.textContent;

export const clearSearch = () => {
    elements.searchVal.textContent = '';
} 