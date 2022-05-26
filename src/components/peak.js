import React, {useState} from 'react';
import iconWall from "../assets/wall.png";
import iconLink from "../assets/mountain-route.png";
import "../assets/SCSS/_peak.scss";
export function Peak({peak}) {




    return (
        <section className="single_peak">
            <h3>{peak?.name} / {peak?.nameSK} - {peak?.height} m n.p.m.</h3>

            {Object.values(peak?.valley).map(el => <p>{el}</p>)}
            <div>
                {Object.entries(peak?.routes).map(el => {
                    return (
                        <div>
                            <img height="60x" width="60px" src={iconWall}/>
                            <h4>Ściana: {el[0]}</h4>
                            <ol>{el[1].map(e => <li>{e}</li>)}</ol>
                        </div>
                    )
                })}
                {peak?.images && (Object.values(peak?.images).map(pic => <img src={require(`../data/${pic}`)}/>))}
                <p className="disclaimer" > Zdjęcia z wyrysowanymi drogami pochodzą ze strony tatry.nfo.sk. Opisy oraz schematy dróg znajdziesz tu:</p>
                {Object.values(peak?.tatryNFO).map(el => <a href={el}><img className="disclaimer" height="60px" width="60px" src={iconLink}/></a>)}

            </div>
        </section>
    )
}