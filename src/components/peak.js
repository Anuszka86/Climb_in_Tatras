import React, {useState} from 'react';
import mountainData from "../data/mountainData.json";
import iconMountain from "../assets/mounts.svg"
export function Peak({peak}) {




    return (
        <div>
            <h2>{peak?.name} / {peak?.nameSK} - {peak?.height} m n.p.m.</h2>

            <h3>Rejon: {Object.values(peak?.valley).map(el => <h3>{el}</h3>)}</h3>
            <div>
                {Object.entries(peak?.routes).map(el => {
                    return (
                        <div>
                            <h4>Ściana: {el[0]}</h4>
                            <ol>{el[1].map(e => <li>{e}</li>)}</ol>
                        </div>
                    )
                })}
                {peak?.images && (Object.values(peak?.images).map(pic => <img src={require(`../data/${pic}`)}/>))}
                <p>Zdjęcia pochodzą ze strony tatry.nfo.sk</p>
                <p>Więcej informacji oraz schematy dróg znajdziesz tu:</p>
                {Object.values(peak?.tatryNFO).map(el => <a href={el}><img height="40px" width="40px" src={iconMountain}/></a>)}
                {/*    <img src={require(`../data/${peak.images}`)}/>*/}
            </div>
        </div>
    )
}