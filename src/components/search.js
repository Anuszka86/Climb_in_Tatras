import {React, useState, useEffect} from 'react'
import iconSearch from "../assets/search.svg"
import mountainData from "../data/mountainData.json";

export function Search({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
//funkcja do szukania wyniesiona do rodzica (map.js)
/*    const handleDoneSearch = () => {
        mountainData.features?.filter(feature => feature.properties.name.toLowerCase() === searchTerm.toLowerCase()).map(filteredFeature => {
            console.log(filteredFeature);
        return filteredFeature});
    }*/
const handleDoneClick = () => {
    if (typeof onSearch === "function") {
        onSearch(searchTerm)
    }
}
    return(
        <div>
            <label>Wyszukaj na mapie</label>
            <input
                type = "search"
                placeholder = "Znajdź szczyt"
                value={searchTerm}
                onChange = {handleChange}
            />
            <button onClick={handleDoneClick}> <img height="40px" width="40px" src={iconSearch} /> </button>

        </div>
    )
}