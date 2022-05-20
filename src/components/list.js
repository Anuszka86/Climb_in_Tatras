import React, {useState} from 'react';
import mountainData from "../data/mountainData.json";
import {Peak} from "./peak";

export function PeaksList({data}) {
    const [selected, setSelected] = useState(null)

    return (
        <div >
            <h2>Ściany z drogami z drogami wspinaczkowymi</h2>
            <ul>
                {data?.map(feature => {
                    return (

                            <button key={feature.properties.id} onClick={() => setSelected(feature)}>{feature.properties.name}</button>

                    )
                })}
            </ul>
            {selected && (<Peak peak={selected?.properties}></Peak>)}

        </div>
    );
}