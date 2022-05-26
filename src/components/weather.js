import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
export function Weather({weatherData}){
return (
    <div>
        <h2>{weatherData?.name}</h2>
        <p>{weatherData?.weatherData.weather[0].description}</p>
        <p></p>
    </div>
)
}