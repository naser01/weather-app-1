import {elements} from './base';

export const getInput = () => elements.searchVal.value;

export const clearSearch = () => {
    elements.searchVal.value = '';
} 