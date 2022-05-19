import {React, useState, useEffect} from 'react'
import {MapContainer, TileLayer, Marker, Popup,  useMap} from 'react-leaflet'
import {Icon} from "leaflet";
import {Search} from "./search";
import mountainData from "../data/mountainData.json";
import iconMarker from "../assets/marker-top.svg"


import 'leaflet/dist/leaflet.css';

import {point} from "leaflet/dist/leaflet-src.esm";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";


export function MyMap() {
    const [data, setData] = useState(mountainData.features)
    const [centralPoint, setCentralPoint] = useState([49.20, 20.10])
    const [activePoint, setActivePoint] = useState(null);


    /*    const handleSearch = value => {
            setData(prev => prev.filter(el => el.properties.name === value))
        }// jako stan ustawi wynik wyszukiwania*/

    const handleDoneSearch = (searchTerm) => {
        if (!searchTerm) {
            setData(mountainData.features)
        }
        setData(prev => prev?.filter(feature => feature.properties?.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }


    const myIcon = new Icon({
        iconUrl: iconMarker,
        iconSize: [25, 25]
    });
    return (
<>
        <Search onSearch={handleDoneSearch}/>
        <MapContainer center={[
            ...centralPoint
        ]} zoom={12} scrollWheelZoom={true}>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map(point => (

                <Marker
                    key={point.properties.id}
                    position={[
                        point.geometry.coordinates[1],
                        point.geometry.coordinates[0]
                    ]}
                    eventHandlers={{
                        click: (e) => {
                            setActivePoint(point);
                        }
                    }}
                    icon={myIcon}
                />
            ))}

            {activePoint && (
                <Popup
                    position={[
                        activePoint.geometry.coordinates[1],
                        activePoint.geometry.coordinates[0]
                    ]}
                    onClose={() => {
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
</>
    );
}


/*
import {React, useState, useEffect} from 'react'
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import {Icon} from "leaflet";
import iconMarker from "../data/icons8-place-marker-100.png"


import 'leaflet/dist/leaflet.css';

import {point} from "leaflet/dist/leaflet-src.esm";


export function MyMap() {
    const [activePoint, setActivePoint] = useState(null);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3005/features")
            .then(r => r.json())
            .then(d => setData(d))
            .catch(e => console.log(e))
    }, [])

    const myIcon = new Icon({
        iconUrl: iconMarker,
        iconSize: [25, 25]
    });
    return (
        <MapContainer center={[
            49.19, 20.19,

        ]} zoom={12} scrollWheelZoom={true}>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {data.map(point => (

                <Marker
                    key={point.properties.id}
                    position={[
                        point.geometry.coordinates[1],
                        point.geometry.coordinates[0]
                    ]}
                    onClick={() => {
                        setActivePoint(point);
                    }}
                    icon={myIcon}
                />
            ))}

            {activePoint && (
                <Popup
                    position={[
                        activePoint.geometry.coordinates[1],
                        activePoint.geometry.coordinates[0]
                    ]}
                    onClose={() => {
                        setActivePoint(null);
                    }}
                >
                    <div>
                        <h2>{activePoint.properties.name}</h2>
                        <p>{activePoint.properties.height}</p>
                    </div>
                </Popup>
            )}
        </MapContainer>
    );
}
*/

