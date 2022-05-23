import {React, useState, useEffect} from 'react';
import iconSearch from "../assets/search.svg";
import "./../assets/SCSS/_search.scss";
import iconMarker from "../assets/marker-top.svg"


export function Search({data, onSearch, onClear}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);


    console.log(suggestions);
    const handleChange = e => {
        const query = e.target.value;
        setSearchTerm(query);
        if (query.length > 1) {
            const filterSuggestions = data.filter(
                (suggestion) =>
                    suggestion.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };


    const handleClick = (e) => {
        setSuggestions([]);
        setSearchTerm(e.target.innerText);
        setSuggestionsActive(false);
    };
    const handleKeyDown = (e) => {
        // UP ARROW
        if (e.keyCode === 38) {
            if (suggestionIndex === 0) {
                return;
            }
            setSuggestionIndex(suggestionIndex - 1);
        }
        // DOWN ARROW
        else if (e.keyCode === 40) {
            if (suggestionIndex - 1 === suggestions.length) {
                return;
            }
            setSuggestionIndex(suggestionIndex + 1);
        }
        // ENTER
        else if (e.keyCode === 13) {
            setSearchTerm(suggestions[suggestionIndex]);
            setSuggestionIndex(0);
            setSuggestionsActive(false);
            onSearch(searchTerm)
        }
    };
    const handleDoneClick = () => {
        if (typeof onSearch === "function") {
            onSearch(searchTerm)
        }
    };

    const handleDoneClear = () => {
        if (typeof onClear === "function") {
            onClear()
        }
    }
    const Suggestions = () => {
        return (
            <ul className="suggestions">
                {suggestions.map((suggestion, index) => {
                    return (
                        <li
                            className={index === suggestionIndex ? "active" : ""}
                            key={index}
                            onClick={handleClick}

                        >
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="searching_unit">
            <h4>Szczyty na których znajdują się drogi wspinaczkowe opisane w topo</h4>
            <div className="searching_box">
                <input
                    type="text"
                    placeholder="Znajdź na mapie"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                {suggestionsActive && <Suggestions/>}
            </div>
            <button className="searching_button" onClick={handleDoneClick}><img height="40px" width="40px"
                                                                                src={iconSearch}/></button>
            <button className="clear_button" onClick={handleDoneClear}> Wszystkie <img height="35px" width="30px" src={iconMarker}/></button>
        </div>
    )
}