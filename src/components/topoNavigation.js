import React, {useState} from 'react';
import {PeaksList} from "./list";
import Carousel from 'react-bootstrap/Carousel'

export function TopoNavigation() {
    const [selectedRegion, setSelectedRegion]= useState(null);

    return (
        <div >
            Tu znajdziesz topo tatrzańskich ścian
            <PeaksList></PeaksList>
        </div>

    );
}