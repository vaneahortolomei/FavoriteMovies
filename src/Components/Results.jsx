import React from "react";

export default function Results({className}) {
    return (
        <div className={`${className} results`}>
            <span className="results__count">Found <strong>11</strong> movies</span>
        </div>
    )
}
