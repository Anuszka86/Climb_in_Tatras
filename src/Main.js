import React from 'react';
import './Main.scss';
import {MyMap} from "./components/map"
import {MainNavigation} from "./components/mainNavigation"
import {Opening} from "./components/opening";
import {Contact} from "./components/contact";
import {GetWeather} from "./components/getWeather";

function Main() {
    return (
        <div>
            <MainNavigation/>
            <Opening/>
            <MyMap/>
            <GetWeather/>
            <Contact/>
        </div>
    );
}

export default Main;
