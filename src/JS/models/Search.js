/*import axios from 'axios';

export default class Search {
    constructor(name) {
        this.name = name;
    }

    async getResults() {
        try {
            const res = await axios(`https://www.metaweather.com//api/location/search/?query=(query)${this.name}`)
        } catch (error) {
            alert(error);
        }
    }
};*/

import axios from 'axios';

async function getResults(q) {
    try {
        const res = await axios(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${q}&APPID=48e4bbf01e7d9297f784d4b9474efe79`)
        console.log(res);
    }
    catch (erorr){
        alert(error)
    }
};

getResults('amman');