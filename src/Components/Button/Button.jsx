import React from "react";
import PropTypes from 'prop-types';

export default function BasicButton({name, type, className, id, onClick, ...props}) {
    return (
        <button
            type={"button"}
            className={`button ${className}`}
            onClick={onClick}
            {...props}
        >
            {name}
        </button>
    )
}


BasicButton.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


BasicButton.defaultTypes = {
    className: '',
    id: '',
    name: 'click'
};
