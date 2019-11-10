import {key, proxy} from '../config';
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`${proxy}api.openweathermap.org/data/2.5/forecast?q=${this.query}&cnt=5&APPID=${key}`)
            
            this.result = res.data.list;
            //console.log(this.result.length);
            console.log(res.data.list.main);
            const v = [];
            let i;
            for(i=0; i<=5; i++){
                v.push(this.result)
            }
            console.log(v);
        }
        catch (erorr){
            alert('error')
        }
    };
}


