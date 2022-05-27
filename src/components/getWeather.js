import {React, useState, useEffect} from 'react';
import mountainData from "../data/mountainData.json";
import {Weather} from "./weather";


export function GetWeather() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=49.16436&lon=20.13369&appid=3d9d188149df365e99872146048d069d&units=metric&lang=pl")
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            })
            .catch(e => console.log(e))
    }, []);
    if (!data) {
        return <h1>pobieram</h1>
    } else {
        return <Weather weatherData={data}/>
    }
}

