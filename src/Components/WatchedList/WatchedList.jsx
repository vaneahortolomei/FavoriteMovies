import ItemsList from "../ItemList.jsx";
import WatchedItem from "./WatchedItem.jsx";
import React from "react";

export default function WatchedList({watched}) {

    if (watched && watched.length > 0) {
        return (
            <ItemsList className={watched.length > 4 ? 'items-list--height' : ''}>
                {watched.map(item => (
                    <WatchedItem
                        item={item}
                        key={item.imdbID}
                    />
                ))}
            </ItemsList>
        )
    } else {
        return (
            <div className="notification">
                <p className="notification__text">Watched list is empty!</p>
            </div>
        )
    }
}
