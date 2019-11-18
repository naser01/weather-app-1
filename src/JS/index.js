import Search from './models/Search';
import {getInput, clearSearch} from './views/searchView.js';
//import elements from './views/base';
import { carouselSlider } from './views/base';
import {renderLoader, elements, clearLoader} from './views/base'

const getInput = elements.searchVal.value

console.log(getInput);
const state = {};

/** 
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
    //1)Get query from view
    //const query = elements.searchVal.value;
    console.log(query);
    //const query = 'london';
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        renderLoader();
        try {
            //Search for Weather Results
            await state.search.getResults();
            carouselSlider();
        }
        catch (error) {
            alert('Something wrong with the search...')
        }
    }
}

controlSearch();

/*elements.searchForm.addEventListener('click', e =>{
    e.preventDefault();
    controlSearch();       
});*/


