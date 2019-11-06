import axios from 'axios';

export default class Search {
    constructor(name) {
        this.name = name;
    }

    async getResults() {
        try {
            const res = await axios(`api.openweathermap.org/data/2.5/forecast?q=${this.name}`)
        } catch (error) {
            alert(error);
        }
    }
};