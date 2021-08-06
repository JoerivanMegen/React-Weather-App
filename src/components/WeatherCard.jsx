import React from 'react';
import '../App.css';
import Time from './Time';

export default function WeatherCard({ weatherData }) {

    return (
        <div className={weatherData.name !== "Maastricht" ? "weatherCard marseille" : "weatherCard maastricht"}>
            <h1 className="title">{weatherData.name}</h1>
            <Time />
            <div className="mainInfo">
                <p className="mainTemperature">{weatherData.main.temp.toFixed(1)}°C</p>
                <p className="weatherType"> {weatherData.weather[0].description}</p>
            </div>
                <img className="icon" src={`${process.env.REACT_APP_ICON_URL}${weatherData.weather[0].icon}@4x.png`} alt="icon" />
            <div className="weatherInfo">
                <p>Min Temperatuur: {weatherData.main.temp_min.toFixed(1)}°C</p>
                <p>Max Temperatuur: {weatherData.main.temp_max.toFixed(1)}°C</p>
                <p>Luchtvochtigheid: {weatherData.main.humidity}%</p>
            </div>
        </div>
    )
}