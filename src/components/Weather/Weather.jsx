import {React,useState} from "react";

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
        let key = '7bf5837d47c4097656c3d70af43dd0b4'
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        let response = await fetch(url)
        let data = await response.json();
        setWeather(data.main.temp-273);

    }

    return(
        <>
            <button className="rounded text-center m-4 p-4 border-white border-2 min-w-14 min-h-14" onClick={getLocation}>{weather}도</button>
        </>
    );
}