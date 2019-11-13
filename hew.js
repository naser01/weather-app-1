import {key, proxy} from '../config';
import axios from 'axios';

/////////////////////////////////
export const allArr = {
    tempArr:[],
    tempMaxArr: [],
    tempMinArr: [],
    cloudsArr: [],
    rainArr: [],
    weatherArr: []
}
/////////////////////////////////


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}api.openweathermap.org/data/2.5/forecast?q=${this.query}&cnt=5&APPID=${key}`)


            ///////////////////////////
            const allArr = {
                tempArr:[],
                tempMaxArr: [],
                tempMinArr: [],
                cloudsArr: [],
                rainArr: [],
                weatherArr: []
            }
            ////////////////////////////



            let i;
            for(i=0; i<5; i++){

                this.result = res.data.list[i];
                this.temp = this.result.main.temp;
                this.tempMax = this.result.main.temp_max;
                this.tempMin = this.result.main.temp_min;
                this.clouds = this.result.clouds.all;
                this.rain = this.result.rain;
                this.weather = this.result.weather[0].description;
                
                
                allArr.tempArr.push(Math.round(this.temp + (-273.15)));
                allArr.tempMaxArr.push(Math.round(this.tempMax + (-273.15)));
                allArr.tempMinArr.push(Math.round(this.tempMin + (-273.15)));
                allArr.cloudsArr.push(this.clouds)
                allArr.rainArr.push(this.rain);
                allArr.weatherArr.push(this.weather);  
            } 
            
        }
        catch (erorr){
            alert('error')
        }
    }
}