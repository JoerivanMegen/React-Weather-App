import React, { useState } from 'react';
import '../App.css';



function WeatherWeeklyCard({ weatherData }) {
    const [clicked, setClicked] = useState(null);
    const toggle = i => {
        if (clicked === i){
            return setClicked(null)
        }

        setClicked(i)
    }


    const weeklyArray = weatherData.daily

    function OnlyDate({ index }) {
        const unixTime = index.dt;
        const date = new Date(unixTime * 1000);

        return date.toLocaleDateString("nl-NL")

    }

    return (
        <div className="accordion-wrapper">
            <div className={weatherData.lat !== 50.8483 ? "accordion marseille" : "accordion maastricht"}>
                {weeklyArray.map((item, i) => (
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => toggle(i)}>
                            <h3><OnlyDate index={item} /></h3>
                            <h3><img className="accordion-icon" src={`${process.env.REACT_APP_ICON_URL}${item.weather[0].icon}.png`} alt="icon" /></h3>
                            <h3><span>{item.temp.min.toFixed(0)}/{item.temp.max.toFixed(0)}°C</span></h3>
                            <h3>{clicked === i ? "-" : "+" }</h3>

                        </div>
                        <div className={clicked === i ? "accordion-content open" : "accordion-content"}>
                            <table className="accordion-table">
                                <tr>
                                    <th></th>
                                    <th>Ochtend</th>
                                    <th>Middag</th>
                                    <th>Avond</th>
                                    <th>Nacht</th>
                                </tr>
                                <tr>
                                    <td>Temp</td>
                                    <td>{item.temp.morn.toFixed(1)}°C</td>
                                    <td>{item.temp.day.toFixed(1)}°C</td>
                                    <td>{item.temp.eve.toFixed(1)}°C</td>
                                    <td>{item.temp.night.toFixed(1)}°C</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                ))}
                


            </div>
            
        </div>
    );
}



export default WeatherWeeklyCard
