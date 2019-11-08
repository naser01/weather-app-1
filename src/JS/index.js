import Search from './models/Search';
import searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

/** 
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
    //1)Get query from view
    const query = searchView.getInput();
    console.log(query);
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        console.log(state.search);
        //console.log(new Search('london')); 

        try {
            //Search for Weather Results
            await state.search.getResults();
        }
        catch (error) {
            alert('Something wrong with the search...')
        }
    }
    elements.searchForm.addEventListener('submit', e =>{
        e.preventDefault();
        controlSearch();
        console.log(controlSearch());
        
    })
}

