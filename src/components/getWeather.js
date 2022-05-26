import {React, useState, useEffect} from 'react';
import mountainData from "../data/mountainData.json";
import {Weather} from "./weather";

export function GetWeather() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("api.openweathermap.org/data/2.5/forecast?lat=49.16&lon=20.13&appid=3d9d188149df365e99872146048d069d")
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            });
    }, []);
    if (data === false) {
        return <h1>pobieram</h1>
    } else {
        return <Weather weatherData={data}/>
    }
}