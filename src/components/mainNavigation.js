import React from 'react';
import {Link} from "react-router-dom";
import "../assets/SCSS/_mainNavigation.scss"
import iconMountain from "../assets/mounts.svg";
export function MainNavigation() {
    return (
        <nav  className="menu">
            <img height="60x" width="60px" src={iconMountain}/>
            <Link to="/">About</Link> |{" "}
            <Link to="topo">Ściany i drogi</Link> |{" "}
            <Link to="/#my-map">Mapa</Link> |{" "}
            <Link to="/">Pogoda</Link> |{" "}
            <Link to="/">Kontakt</Link> |{" "}
        </nav>
    )
}