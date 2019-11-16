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

            const noRain = (rain) => {
                if (typeof(rain) === "object"){
                    return rain['3h']  + 'mm';
                } else if(typeof(rain) === 'undefined' || rain === null) {
                    return 'no rain';
                }
            }

            const formatDate = (date) => {
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

            const weatherIcon = (per) => {
                if(per === 99) {
                    return per;
                }
            }
            
            const markup = `
                <button class="carousel__button btn-left">
                    <img src="./img/iconmonstr-arrow-left-64.svg" alt="">
                </button>
                <div class="carousel__track_container">
                    <ul class="carousel__track">
                        <li class="carousel__slider">
                            <div class="carousel-left">
                                <div class="carousel-left-top">
                                    <p class="temp_main">${tempArr[0]+'°'}</p>
                                </div>
                                <div class="carousel-left-bottom">
                                    <div class="weather-icons">
                                    
                                    </div>
                                    <p class="cloud">${weatherIcon(cloudsArr[0]) + '%' + ' ' + 'Cloudy'}</p>
                                    <p class="weather-tday">${weatherArr[0]}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-right">
                                <div class="carousel-right-top">
                                    <div class="date-box">
                                        <p>${formatDate(new Date()) + ' ' + this.city + ',' + this.country}</p>
                                    </div>
                                </div>
                                <div class="carousel-right-bottom">
                                    <div class="weather">
                                        <p>temp max</p>
                                        <p>${tempMaxArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p>temp min</p>
                                        <p>${tempMinArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p style="margin-bottom: 110px;">rain</p>
                                        <p>${noRain(rainArr[0])}</p>
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li class="carousel__slider">
                            <div class="carousel-left">
                                <div class="carousel-left-top">
                                    
                                    <p class="temp_main">${tempArr[0]+'°'}</p>
                                </div>
                                <div class="carousel-left-bottom">
                                    <div class="weather-icons">
                                    
                                    </div>
                                    <p class="cloud">${weatherIcon(cloudsArr[0]) + '%' + ' ' + 'Cloudy'}</p>
                                    <p class="weather-tday">${weatherArr[0]}</p>
                                    </div>
                                </div>
                            </div>  
                            <div class="carousel-right">
                                <div class="carousel-right-top">
                                    <div class="date-box">
                                        <p>${formatDate(new Date()) + ' ' + this.city + ',' + this.country}</p>
                                    </div>
                                </div>
                                <div class="carousel-right-bottom">
                                    <div class="weather">
                                        <p>temp max</p>
                                        <p>${tempMaxArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p>temp min</p>
                                        <p>${tempMinArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p style="margin-bottom: 110px;">rain</p>
                                        <p>${noRain(rainArr[0])}</p>
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li class="carousel__slider">
                            <div class="carousel-left">
                                <div class="carousel-left-top">                                   
                                    <p class="temp_main">${tempArr[0]+'°'}</p>
                                </div>
                                <div class="carousel-left-bottom">
                                    <div class="weather-icons">
                                    
                                    </div>
                                    <p class="cloud">${weatherIcon(cloudsArr[0]) + '%' + ' ' + 'Cloudy'}</p>
                                    <p class="weather-tday">${weatherArr[0]}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-right">
                                <div class="carousel-right-top">
                                    <div class="date-box">
                                        <p>${formatDate(new Date()) + ' ' + this.city + ',' + this.country}</p>
                                    </div>
                                </div>
                                <div class="carousel-right-bottom">
                                    <div class="weather">
                                        <p>temp max</p>
                                        <p>${tempMaxArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p>temp min</p>
                                        <p>${tempMinArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p style="margin-bottom: 110px;">rain</p>
                                        <p>${noRain(rainArr[0])}</p>
                                    </div>
                                </div>
                            </div>
                        </li>




                        <li class="carousel__slider">
                            <div class="carousel-left">
                                <div class="carousel-left-top">
                                    <p class="temp_main">${tempArr[0]+'°'}</p>
                                </div>
                                <div class="carousel-left-bottom">
                                    <div class="weather-icons">
                                    
                                    </div>
                                    <p class="cloud">${weatherIcon(cloudsArr[0]) + '%' + ' ' + 'Cloudy'}</p>
                                    <p class="weather-tday">${weatherArr[0]}</p>
                                    </div>
                                </div>
                            </div> 
                            <div class="carousel-right">
                                <div class="carousel-right-top">
                                    <div class="date-box">
                                        <p>${formatDate(new Date()) + ' ' + this.city + ',' + this.country}</p>
                                    </div>
                                </div>                                
                                <div class="carousel-right-bottom">
                                    <div class="weather">
                                        <p>temp max</p>
                                        <p>${tempMaxArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p>temp min</p>
                                        <p>${tempMinArr[0]+'°'}</p>
                                    </div>                                    
                                    <div class="weather">
                                        <p style="margin-bottom: 110px;">rain</p>
                                        <p>${noRain(rainArr[0])}</p>
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li class="carousel__slider">
                            <div class="carousel-left">
                                <div class="carousel-left-top">
                                    <p class="temp_main">${tempArr[0]+'°'}</p>
                                </div>
                                <div class="carousel-left-bottom">
                                    <div class="weather-icons">

                                    </div>
                                    <p class="cloud">${weatherIcon(cloudsArr[0]) + '%' + ' ' + 'Cloudy'}</p>
                                    <p class="weather-tday">${weatherArr[0]}</p>
                                    </div>
                                </div>
                            </div> 
                            <div class="carousel-right">
                                <div class="carousel-right-top">
                                    <div class="date-box">
                                        <p>${formatDate(new Date()) + ' ' + this.city + ',' + this.country}</p>
                                    </div>
                                </div>                                
                                <div class="carousel-right-bottom">
                                    <div class="weather">
                                        <p>temp max</p>
                                        <p>${tempMaxArr[0]+'°'}</p>
                                    </div>
                                    
                                    <div class="weather">
                                        <p>temp min</p>
                                        <p>${tempMinArr[0]+'°'}</p>
                                    </div>                                    
                                    <div class="weather">
                                        <p style="margin-bottom: 110px;">rain</p>
                                        <p>${noRain(rainArr[0])}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>    
                <button class="carousel__button btn-right">
                    <img src="./img/iconmonstr-arrow-right-63.svg" alt="">
                </button>
                `;

            document.querySelector('.carousel').insertAdjacentHTML('beforeend', markup); 

            const track = document.querySelector('.carousel__track');
            const slides = Array.from(track.children);

            console.log(slides);
        }
        catch (erorr){
            alert('error')
        }
    }
}



  /*                
  function renderIcon(per) {
    const clear = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/><svg `;
    const semiClear = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.396 12h-2.396v-2h2.396v2zm7.604-6.458v-3.542h-2v3.542h2zm-4.793.876l-2.156-2.156-1.414 1.414 2.156 2.156 1.414-1.414zm9.461-2.396l-2.115 2.114 1.414 1.414 2.115-2.114-1.414-1.414zm-11.7 10.907l-2.198 1.919 1.303 1.517 2.198-1.919-1.303-1.517zm21.032 2.793c0 2.362-1.95 4.278-4.354 4.278h-10.292c-2.404 0-4.354-1.916-4.354-4.278 0-.77.211-1.49.574-2.113-.964-.907-1.574-2.18-1.574-3.609 0-2.762 2.238-5 5-5 1.329 0 2.523.528 3.414 1.376.649-.24 1.35-.376 2.086-.376 3.171 0 5.753 2.443 5.921 5.516 2.034.359 3.579 2.105 3.579 4.206zm-18-5.722c0 .86.37 1.628.955 2.172.485-.316 1.029-.551 1.624-.656.088-1.61.843-3.042 1.994-4.046-.46-.288-.991-.47-1.573-.47-1.654 0-3 1.346-3 3zm16 5.722c0-2.076-1.979-2.618-3.489-2.512.218-1.439-.24-5.21-4.011-5.21-3.875 0-4.062 3.854-4.011 5.209-1.385-.084-3.489.395-3.489 2.513 0 1.256 1.056 2.278 2.354 2.278h10.291c1.299 0 2.355-1.022 2.355-2.278z"/></svg>`;
    const cloudy = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.422 11.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278z"/></svg>`;
                    
    if (0 < per > 30) {
    document.querySelector('.weather-icons').insertAdjacentHTML('beforeend', clear);
    return per;
    } 
    else if (31 < per > 70) {
    document.querySelector('.weather-icons').insertAdjacentHTML('beforeend', semiClear);              
    return per;
    } else if (71 < per >= 100) {
    document.querySelector('.weather-icons').insertAdjacentHTML('beforeend', cloudy);
    return per;
    }
    }*/

                    /*allArr.tempArr.push(Math.round(this.temp + (-273.15)));
                allArr.tempMaxArr.push(Math.round(this.tempMax + (-273.15)));
                allArr.tempMinArr.push(Math.round(this.tempMin + (-273.15)));
                allArr.cloudsArr.push(this.clouds)
                allArr.rainArr.push(this.rain);
                allArr.weatherArr.push(this.weather);*/ 






