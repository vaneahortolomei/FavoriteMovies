import React from "react";

export default function ItemsList({children}) {
    return (
        <ul className="items-list">
            {children}
        </ul>
    )
}
