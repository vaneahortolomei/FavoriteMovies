import React from "react";

export default function ItemsList({className, children}) {
    return (
        <ul className={`items-list ${className ? className : ""}`}>
            {children}
        </ul>
    )
}
