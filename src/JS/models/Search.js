import {key, proxy} from '../config';
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`${proxy}api.openweathermap.org/data/2.5/forecast?q=${this.query}&cnt=5&APPID=${key}`)
            this.result = res.data.list
            console.log(this.result);
        }
        catch (erorr){
            alert('error')
        }
    };
}


