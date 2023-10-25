import React from "react";

export default function CounterPanel({className, watched}) {

    return (
        <div className={`counter-panel ${className}`}>
            <header className="counter-panel__title">Movies you watched</header>
            <div className="counter-panel__options">
                <p className="counter-panel__option">{watched.length} Movies</p>
            </div>
        </div>
    )
}
