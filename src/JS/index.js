import Search from './models/Search';
import searchView from './views/searchView.js';
import { elements } from './views/base';

elements.searchBtn.addEventListener('click', ()=>{
    const val = document.getElementById('search__val').value; 
    const search = new Search(val);
    search.getResults();
})

//const state = {};

/** 
 * SEARCH CONTROLLER
 */

/*const controlSearch = async () => {
    //1)Get query from view
    const query = searchView.getInput();
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        try {
            //Search for Weather Results
            await state.search.getResults();
        }
        catch (error) {
            alert('Something wrong with the search...')
        }
    }
}

elements.searchForm.addEventListener('click', e =>{
    e.preventDefault();
    controlSearch();       
});*/


