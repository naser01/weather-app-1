import Search from './models/Search';
import searchView from './views/searchView';


const state = {};

/** 
 * SEARCH CONTROLLER
 */

const controlSearch = async() => {
    //1)Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        console.log(state.search);
        console.log(new Search('london'));
        
        
    }
}
