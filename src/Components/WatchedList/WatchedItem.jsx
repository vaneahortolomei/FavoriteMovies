import React from "react";

export default function WatchedItem({item}) {

    return (
        <li className="items-list__item item ">
            <div className="item__img-wrapper">
                <img src={item.poster} alt={item.title} className="item__img"/>
            </div>
            <div className="item__header">
                <p className="item__title">{item.title}</p>
                <div className="item__options">
                    <div className="item__option">
                        <img className="item__icon" src="./full-star.svg" alt="icon"/>
                        <p className="item__text">{item.imdbRating}</p>
                    </div>
                    <div className="item__option">
                        <img className="item__icon" src="./full-star.svg" alt="icon"/>
                        <p className="item__text">{item.userRating}</p>
                    </div>
                    <div className="item__option">
                        <img className="item__icon" src="./time.svg" alt="icon"/>
                        <p className="item__text">{item.runtime}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}
