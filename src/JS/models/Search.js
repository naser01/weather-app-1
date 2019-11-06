import axios from 'axios';

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
};