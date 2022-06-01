import React, { useEffect, useState } from "react";

import "../SCSS/_weather.scss";

export function ForecastUnit({data, number}) {
     return (<div className="forecast_unit">
         <p> {data?.list[number].dt_txt} </p>
         <p>{data?.list[number].weather[0].description} </p>
         <img src ={`http://openweathermap.org/img/wn/${data?.list[number].weather[0].icon}.png`} alt="wthr img" width="50px"/>
         <p>temperatura {data?.list[number].main.temp} C</p>
     </div>)
}