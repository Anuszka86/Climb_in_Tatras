import {React, useState, useEffect} from 'react'
import {MapContainer, TileLayer, Marker, Popup,  useMap} from 'react-leaflet'
import {Icon} from "leaflet";
import {Search} from "./search";
import mountainData from "../data/mountainData.json";
import iconMarker from "../assets/marker-top.svg"
import {ChangeView} from "./changeMapView";

import 'leaflet/dist/leaflet.css';

import {point} from "leaflet/dist/leaflet-src.esm";



export function MyMap() {
    const [data, setData] = useState(mountainData.features)
    const [centralPoint, setCentralPoint] = useState([49.17, 20.15])
    const [activePoint, setActivePoint] = useState(null);



    const handleDoneSearch = (searchTerm) => {
        if (!searchTerm) {
            setData(mountainData.features)
        }
        setData(prev => prev?.filter(feature => feature.properties?.name.toLowerCase().includes(searchTerm.toLowerCase())));
        /*setCentralPoint([data[0].geometry.coordinates[1], data[0].geometry.coordinates[0]])*/
    }


    const myIcon = new Icon({
        iconUrl: iconMarker,
        iconSize: [25, 25]
    });



    return (
<>
        <Search data={data.map(el => el.properties.name)} onSearch={handleDoneSearch} />
        <MapContainer center={[
            ...centralPoint
        ]} zoom={12} scrollWheelZoom={true}>
            <ChangeView center={[data[0].geometry.coordinates[1], data[0].geometry.coordinates[0]]} zoom={12} />
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
                            setActivePoint(point);
                        }
                    }}
                    icon={myIcon}
                />
            )))}

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

