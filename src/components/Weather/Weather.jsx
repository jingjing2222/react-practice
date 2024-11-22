import {React,useState} from "react";
import WeatherButton from "./WeatherButton";


export default function Weather(){
    const[weather,setWeather]=useState([])

    function getLocation() {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                getWeatherByCurrentLocation(lat, lon)
            });
        } else { 
            console.log("실패");
        }
    }
    const getWeatherByCurrentLocation= async (lat, lon)=>{
        let key = import.meta.env.VITE_OPENWEATHERMAP_KEY;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        let response = await fetch(url)
        let data = await response.json();
        setWeather([data.name,Math.round((data.main.temp-273) * 10) / 10,data.weather[0].main]);
    }

    return(
        <>
        <div>
            <WeatherButton onClick={getLocation} location='현재 위치'/>
        </div>
        <div className="text-center border-2 min-w-2 min-h-2 w-52">
            <div>위치:{weather[0]}</div> <div>기온:{weather[1]}도</div> <div>날씨:{weather[2]}</div>
        </div>
        </>
    );
}