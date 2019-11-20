import Search from './models/Search';
//import {getInput, clearSearch} from './views/searchView.js';
//import elements from './views/base';
//import { carouselSlider } from './views/base';
import {renderLoader, elements, clearSearch, carouselSlider, clearResults, removeBtn} from './views/base'


const state = {};

/** 
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
    //1)Get query from view
    const query = String(elements.searchVal.value);
    
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        clearSearch();
        clearResults();
        renderLoader();

        

        try {
            //Search for Weather Results
            await state.search.getResults();
            removeBtn();
            carouselSlider();
        }
        catch (error) {
            alert('Something wrong with the search...')
        }
    }
}


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
//controlSearch();

/*elements.searchForm.addEventListener('click', e =>{
    e.preventDefault();
    controlSearch();       
});*/


