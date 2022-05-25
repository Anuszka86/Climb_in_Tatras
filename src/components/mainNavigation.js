import React from 'react';
import {Link} from "react-router-dom";
import "../assets/SCSS/_mainNavigation.scss"
import iconMountain from "../assets/mounts.svg";

export function MainNavigation() {
    return (
        <nav  className="menu">
            <img className="logo" height="60x" width="60px" src={iconMountain}/>
            <Link to="/">About</Link> |{" "}
            <Link to="topo">Ściany i drogi</Link> |{" "}
            <a href="/#my-map">Mapa</a> |{" "}
            <a href="/">Pogoda</a> |{" "}
            <a href="/">Kontakt</a> |{" "}
        </nav>
    )
}