import {key, proxy} from '../config';

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    }
    async getResults() {
        try {
            const res = await axios(`${proxy}api.openweathermap.org/data/2.5/weather?q=${this.query}&APPID=${key}`)
            console.log(res);
        }
        catch (erorr){
            alert(error)
        }
        getResults('amman');
    };
}


