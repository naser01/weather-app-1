import {elements} from './base';

export const getInput = () => elements.searchVal.nodeValue;

export const clearSearch = () => {
    elements.searchVal.nodeValue = '';
} 