import React from "react";

export default function Item({item, onShowDetails}) {
    return (
        <li onClick={() => onShowDetails(item.imdbID)} className="items-list__item item">
            <div className="item__img-wrapper">
                <img src={item.Poster} alt={item.Title} className="item__img"/>
            </div>
            <div className="item__header">
                <p className="item__title">{item.Title}</p>
                <span className="item__year">{item.Year}</span>
            </div>
        </li>
    )
}
