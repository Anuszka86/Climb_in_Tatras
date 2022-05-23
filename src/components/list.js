import React, {useState} from 'react';
import "./../assets/SCSS/_peaksList.scss"
import {Peak} from "./peak";

export function PeaksList({data}) {
    const [selected, setSelected] = useState(null)

    return (
        <section className="peaks_list">
            <h3>Ściany z drogami z drogami wspinaczkowymi</h3>
            <ul>
                {data?.map(feature => {
                    return (

                        <button key={feature.properties.id} onClick={() => setSelected(feature)}>{feature.properties.name}</button>

                    )
                })}
            </ul>
            {selected && (<Peak peak={selected?.properties}></Peak>)}

        </section>
    );
}