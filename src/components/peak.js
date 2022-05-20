import React, {useState} from 'react';
import mountainData from "../data/mountainData.json";
import iconWall from "../assets/wall.png"
import iconLink from "../assets/mountain-route.png"
export function Peak({peak}) {




    return (
        <div>
            <h2>{peak?.name} / {peak?.nameSK} - {peak?.height} m n.p.m.</h2>

            <h3>Rejon: {Object.values(peak?.valley).map(el => <h3>{el}</h3>)}</h3>
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
                <p>Zdjęcia z wyrysowanymi drogami pochodzą ze strony tatry.nfo.sk. Opisy oraz schematy dróg znajdziesz tu:</p>
                {Object.values(peak?.tatryNFO).map(el => <a href={el}><img height="60px" width="60px" src={iconLink}/></a>)}
                {/*    <img src={require(`../data/${peak.images}`)}/>*/}
            </div>
        </div>
    )
}