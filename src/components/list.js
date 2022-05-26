import React, {useState} from 'react';
import "./../assets/SCSS/_peaksList.scss"
import {Peak} from "./peak";

export function PeaksList({data}) {
    const [selected, setSelected] = useState(null)

    return (
        <section className="peaks_list">

            <ul id="peaks_list">
                {data?.map(feature => {
                    return (
                        <li key={feature.properties.id}>
                        <button onClick={() => setSelected(feature)}>{feature.properties.name}</button>
                </li>
                    )
                })}
            </ul>
            {selected && (<Peak peak={selected?.properties}></Peak>)}

        </section>
    );
}