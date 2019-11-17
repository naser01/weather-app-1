import Search from './models/Search';
import searchView from './views/searchView.js';
import elements from './views/base';
import { loader } from './views/base';


/*const search = new Search('london');
search.getResults();
search.pushData();
*/

const state = {};

/** 
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
    //1)Get query from view
    //const query = searchView.getInput();
    const query = 'london';
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        try {
            //Search for Weather Results
            await state.search.getResults();
            loader();
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


