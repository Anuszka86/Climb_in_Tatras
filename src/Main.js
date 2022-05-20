import React from 'react';
import './Main.scss';
import {MyMap} from "./components/map"
import {MainNavigation} from "./components/mainNavigation"
import {Opening} from "./components/opening";

function Main() {
    return (
        <div>
            <MainNavigation/>
            <Opening/>
            <MyMap/>
        </div>
    );
}

export default Main;
