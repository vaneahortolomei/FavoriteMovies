import React from "react";
import PropTypes from 'prop-types';

export default function Logo(props) {
    return (
        <div className={`${props.className} logo`}>
            <img src={props.imageSrc} className="logo__img" alt="Logo"/>
        </div>
    )

}

Logo.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    className: PropTypes.string,
}
