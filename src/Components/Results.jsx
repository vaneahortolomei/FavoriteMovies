import React from "react";

export default function Results({className, movieCount}) {
    return (
        <div className={`${className} results`}>
            <span className="results__count">Found <strong>{movieCount}</strong> movies</span>
        </div>
    )
}
