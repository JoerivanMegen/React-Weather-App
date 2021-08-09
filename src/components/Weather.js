import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherWeeklyCard from "./WeatherWeeklyCard";
import ReactCardFlip from 'react-card-flip';


export default function Weather({ city, lat, lon }) {
  const [currentData, setCurrentData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&lang=nl&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrentData(result);
        console.log(result);
      });
  },
    [city]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeeklyData(result);
        console.log(result);
      });
  },
    [lat, lon]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip 
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront="0.7"
        flipSpeedFrontToBack="0.7"
      >
        <div className="App">
          {typeof currentData.main != "undefined" ? (
            <WeatherCard weatherData={currentData} x="0"/>
          ) : (
            <div></div>
          )}
          <button className="frontToBack" onClick={handleClick}>Bekijk de komende week! &gt;</button>
        </div>
        <div className="AppWeekly">
          {typeof weeklyData.daily != "undefined" ? (
            <WeatherWeeklyCard weatherData={weeklyData} x="1"/>
          ) : (
            <div></div>
          )}
          <button className="backToFront" onClick={handleClick}> &lt; Terug naar overzicht</button>
        </div>
      </ReactCardFlip>
    </>
  );
}


