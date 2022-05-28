import React, {useState} from 'react';
import {PeaksList} from "./list";
import mountainData from "../data/mountainData.json";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import {carouselData} from "./carouselData";
import "../SCSS/_topoNavigation.scss";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export function TopoNavigation() {
    const [selectedRegion, setSelectedRegion] = useState(null);
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
        setIsSliding(null);
    };
    const handleSlides = (e) => setIsSliding(prev => isSliding ? null : 5000);
    return (
        <section className="topo_main">
            <h2 className="main-title"> Drogi wspinaczkowe w Tatrach</h2>
            <div className="carousel_container">

                <Carousel activeIndex={index} onSelect={handleSelect} interval={isSliding}>
                    {carouselData.map((slide, i) => {
                        return (
                            <Carousel.Item key={i} className="carousel_container" onClick={handleSlides}>
                                <img
                                    className="d-block w-100 carousel_container"
                                    src={slide.image}
                                    alt="slider image"
                                />
                               <Link activeClass="active" to="peaks_list" spy={true} smooth={true}> <Carousel.Caption className="carousel_caption" onClick={handleNavigation}>
                                    <h3>{slide.caption}</h3>
                                    <p>{slide.description}</p>
                                </Carousel.Caption></Link>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
            {selectedRegion && (<h3 className="peaks_list_header">Wspinanie w rejonie:</h3>)}
            {selectedRegion && <PeaksList data={selectedRegion}></PeaksList>}
        </section>
    );
}