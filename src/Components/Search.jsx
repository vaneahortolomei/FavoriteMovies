import BasicInput from "./FormControl/Input.jsx";
import React from "react";

export default function Search({className, query, setQuery}) {

    return (
        <div className={`${className} search`}>
            <label form="search" className="search__label"/>
            <BasicInput
                className={'search__input'}
                type="text"
                value={query}
                placeholder="Search..."
                name="search"
                onChange={(e) => setQuery(e.target.value)}
                id="search"
            />
        </div>
    )
}
