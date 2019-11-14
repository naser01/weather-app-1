import {key, proxy} from '../config';
import axios from 'axios';
import { isUndefined, isString, isNumber } from 'util';
import { type } from 'os';
//import { log } from 'util';


//****DATA ARRAYS****//
/*
export const allArr = {
    tempArr:[],
    tempMaxArr: [],
    tempMinArr: [],
    cloudsArr: [],
    rainArr: [],
    weatherArr: []
}*/

/*
this.tempArr = [];
this.tempMaxArr = [];
this.tempMinArr = [];
this.cloudsArr = [];
this.rainArr = [];
this.weatherArr = [];
*/

/** 
const tempArr = [];
const tempMaxArr = [];
const tempMinArr = [];
const cloudsArr = [];
const rainArr = [];
const weatherArr = [];
*/

//****DATA COLLECTION****//
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            function noRain(rain){
                if (typeof(rain) === "object"){
                    return rain['3h'];
                } else if(typeof(rain) === 'undefined' || rain === null) {
                    return 'no rain';
                }
            }

            function formatDate(date) {
                const monthNames = [
                  "JAN", "FEB", "MAR",
                  "APRIL", "MAY", "JUN", "JUL",
                  "AUG", "SEP", "OCT",
                  "NOV", "DEC"
                ];

                const weekday = ["Sunday","Monday","Tuesday","Wednesday",
                    "Thursday","Friday","Saturday"
                ];
                               
                const wday = weekday[date.getDay()];
                const day = date.getDate();
                const monthIndex = date.getMonth();
                const year = date.getFullYear();
              
                return wday + ',' + ' ' + day + ' ' + monthNames[monthIndex] + ' ' + year;
            }

            const res = await axios(`${proxy}api.openweathermap.org/data/2.5/forecast?q=${this.query}&cnt=5&APPID=${key}`)
            const tempArr = [];
            const tempMaxArr = [];
            const tempMinArr = [];
            const cloudsArr = [];
            const rainArr = [];
            const weatherArr = [];
            
            let i;
            for(i=0; i<5; i++){

                this.result = res.data.list[i];
                this.city = res.data.city.name;
                this.country = res.data.city.country;
                this.temp = this.result.main.temp;
                this.tempMax = this.result.main.temp_max;
                this.tempMin = this.result.main.temp_min;
                this.clouds = this.result.clouds.all;
                this.rain = this.result.rain;
                this.weather = this.result.weather[0].description;

               
                tempMaxArr.push(Math.round(this.tempMax + (-273.15)));
                tempMinArr.push(Math.round(this.tempMin + (-273.15)));
                tempArr.push(Math.round(this.temp + (-273.15)));
                cloudsArr.push(this.clouds)
                rainArr.push(this.rain);
                weatherArr.push(this.weather);
            }  
            console.log(res);
            
            const markup = `
                <li class="carousel__slider">
                        <div class="carousel-left">
                            <div class="carousel-left-top">
                                <!--<img href="uds-static.api.aero/weather/icon/sm/01.png" alt="">-->
                                <p class="temp_main">${tempArr[0]+'°'}</p>
                            </div>
                        
                            <div class="carousel-left-bottom">
                                <img src="./img/day-time/clear-sky.png" alt="" class="weather-tday-img">
                                <p class="cloud">${cloudsArr[0]+'%'+ ' ' + 'Cloudy'}</p>
                                <p class="weather-tday">${weatherArr[0]}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="carousel-right">
                            <div class="carousel-right-top">
                                <div class="date-box">
                                    <p>${formatDate(new Date()) + ' ' + this.city + ',' + this.country}</p>
                                </div>
                            </div>
                            <hr>
                        <div class="carousel-right-bottom">
                            <div class="weather">
                                <p>${tempMaxArr[0]+'°'}</p>
                            </div>
                            <hr>
                            <div class="weather">
                                
                                <p>${tempMinArr[0]+'°'}</p>
                            </div>
                            <hr>
                            <div class="weather"><p>${noRain(rainArr[0])}</p></div>
                        </div>
                    </div>
                </li>
                `;

                document.querySelector('.carousel__track').insertAdjacentHTML('beforebegin', markup);
                /*allArr.tempArr.push(Math.round(this.temp + (-273.15)));
                allArr.tempMaxArr.push(Math.round(this.tempMax + (-273.15)));
                allArr.tempMinArr.push(Math.round(this.tempMin + (-273.15)));
                allArr.cloudsArr.push(this.clouds)
                allArr.rainArr.push(this.rain);
                allArr.weatherArr.push(this.weather);*/     
                
        }
        catch (erorr){
            alert('error')
        }
    }
}



  /*pushData(){
        const tempArr = [];
        const tempMaxArr = [];
        const tempMinArr = [];
        const cloudsArr = [];
        const rainArr = [];
        const weatherArr = [];
        tempArr.push(Math.round(this.temp + (-273.15)));
        tempMaxArr.push(Math.round(this.tempMax + (-273.15)));
        tempMinArr.push(Math.round(this.tempMin + (-273.15)));
        cloudsArr.push(this.clouds)
        rainArr.push(this.rain);
        weatherArr.push(this.weather);
        console.log(tempArr);

        const markup = `
        <li class="carousel__slider">
            <div class="carousel-left">
                <div class="carousel-left-top">
                    <p>${tempArr[1]}</p>
                </div>
                <hr>
                <div class="carousel-left-bottom">
                    <p>rr</p>
                </div>
            </div>
            <hr>
            <div class="carousel-right">
                <div class="carousel-right-top">
                    <p>moday,26th ,2019 London, UK</p>
                </div>
                <hr>
                <div class="carousel-right-bottom">
                    <div class="weather"><p>33</p></div>
                    <hr>
                    <div class="weather"><p>33</p></div>
                    <hr>
                    <div class="weather"><p>33</p></div>
                </div>
            </div>
        </li>
        `;

        document.querySelector('.carousel__track').insertAdjacentHTML('beforebegin', markup);
    }*/






