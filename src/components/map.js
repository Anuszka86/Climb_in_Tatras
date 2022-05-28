import {React, useState, useEffect} from 'react'
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import {Icon} from "leaflet";
import {Search} from "./search";
import mountainData from "../data/mountainData.json";
import iconMarker from "../assets/marker-top.svg"
import {ChangeView} from "./changeMapView";
import "../SCSS/_map.scss"
import 'leaflet/dist/leaflet.css';

import {point} from "leaflet/dist/leaflet-src.esm";


export function MyMap() {
    const [data, setData] = useState(mountainData.features)
    const [centralPoint, setCentralPoint] = useState([49.17, 20.15])
    const [activePoint, setActivePoint] = useState(null);


    const handleDoneSearch = (searchTerm) => {
        setData(mountainData.features);
        if (!searchTerm) {
            setData(mountainData.features)
        }
        setData(prev => prev?.filter(feature => feature.properties?.name.toLowerCase().includes(searchTerm.toLowerCase())));
        setActivePoint(null);
        /*setCentralPoint([data[0].geometry.coordinates[1], data[0].geometry.coordinates[0]])*/
    }

    const handleClear = () => {
        setData(mountainData.features)
    }
    const myIcon = new Icon({
        iconUrl: iconMarker,
        iconSize: [25, 25]
    });


    return (
        <section id="my-map" className="my-map">
            <Search data={mountainData.features.map(el => el.properties.name)} onSearch={handleDoneSearch}
                    onClear={handleClear}/>
            <MapContainer center={[
                ...centralPoint
            ]} zoom={12} scrollWheelZoom={true}>
                <ChangeView center={[data[0].geometry.coordinates[1], data[0].geometry.coordinates[0]]} zoom={13}/>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {data && (data.map(point => (

                    <Marker
                        key={point.properties.id}
                        position={[
                            point.geometry.coordinates[1],
                            point.geometry.coordinates[0]
                        ]}
                        eventHandlers={{
                            click: (e) => {
                                if (!activePoint) {
                                    setActivePoint(point)
                                } else {
                                    setActivePoint(null)
                                }
                                ;
                            }
                        }}
                        icon={myIcon}
                    />
                )))}

                {activePoint && (
                    <Popup className="pop_up"
                        position={[
                            activePoint.geometry.coordinates[1],
                            activePoint.geometry.coordinates[0]
                        ]}
                        onClose={() => {
                            setActivePoint(null);
                        }}
/*                        onClick={() => {
                            setActivePoint(null);
                        }}*/
                        onKeyDown={() => {
                            setActivePoint(null);
                        }}

                    >
                        <div>
                            <h2>{activePoint.properties.name}</h2>
                            <span>{activePoint.properties.nameSK}</span>
                            <p>{activePoint.properties.height} m n.p.m.</p>
                            <p>Rejon: {activePoint.properties.valley}</p>
                        </div>
                    </Popup>
                )}

            </MapContainer>
        </section>
    );
}

