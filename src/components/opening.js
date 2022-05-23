import React from 'react';
import "../assets/SCSS/_opening.scss";
import {Link} from "react-router-dom";

export function Opening() {
    return (
        <section className="opening">
            <h1>Wspinanie w Tatrach</h1>
            <Link to="topo">
                <button>Topo</button>
            </Link> {" "}
        </section>
    )
}