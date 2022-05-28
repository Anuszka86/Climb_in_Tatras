import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import "../SCSS/_weather.scss";

export function Weather({weatherData}){
    console.log(weatherData);
    return (
        <section className="weather" id="weather">
            <h2>Warunki pogodowe</h2>
            <div className="weather-now">
            <h3>Gerlach</h3>
            <p> {weatherData?.list[0].dt_txt} </p>
            <p>{weatherData?.list[0].weather[0].description}</p>

            <p>temperatura {weatherData?.list[0].main.temp} C</p>
            <p>temperatura odczuwalna {weatherData?.list[0].main.feels_like} C</p>
            <p>ciśnienie {weatherData?.list[0].main.grnd_level} hPa</p>
            <p>wiatr {weatherData?.list[0].wind.speed} m/s</p>
            <p>zachmurzenie {weatherData?.list[0].clouds.all} %</p>
{/*            <p>opad deszczu {weatherData?.list[0].rain["3h"]} mm/3h</p>*/}
        </div>
                    </section>
    )
}


