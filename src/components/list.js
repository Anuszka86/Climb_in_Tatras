import React, {useState} from 'react';
import mountainData from "../data/mountainData.json";
import {Peak} from "./peak";

export function PeaksList() {
    const [selected, setSelected] = useState(null)

    return (
        <div >
            <h1>Lista gór z drogami wspinaczkowymi</h1>
            <ul>
                {mountainData.features?.map(feature => {
                    return (

                            <button key={feature.properties.id} onClick={() => setSelected(feature)}>{feature.properties.name}</button>

                    )
                })}
            </ul>
            {selected && (<Peak peak={selected?.properties}></Peak>)}

        </div>
    );
}