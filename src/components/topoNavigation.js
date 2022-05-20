import React, {useState} from 'react';
import {PeaksList} from "./list";
import mountainData from "../data/mountainData.json";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import {carouselData} from "./carouselData";


export function TopoNavigation() {
    const [selectedRegion, setSelectedRegion]= useState(null);
    const [index, setIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(5000)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    /*console.log(carouselData[index].caption);*/
    console.log(selectedRegion);
    const handleNavigation = (e) => {
        const selectedName = carouselData[index].caption;
        setSelectedRegion(mountainData.features?.filter(feature => feature?.properties?.valley?.some(el => el.toLowerCase() === selectedName.toLowerCase())));
       };
const handleSlides = (e) => setIsSliding(prev => isSliding ? null : 5000 );
    return (
        <>
            <h1>Drogi wspinaczkowe</h1>
            <h2>Wybierz rejon</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={isSliding}>
                {carouselData.map((slide, i) => {
                    return (
                        <Carousel.Item onClick={handleSlides}>
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt="slider image"
                            />
                            <Carousel.Caption onClick={handleNavigation}>
                                <h3>{slide.caption}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <PeaksList data={selectedRegion}></PeaksList>
        </>
    );}