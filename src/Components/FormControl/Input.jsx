import React from "react";
import PropTypes from 'prop-types';

export default function BasicInput({type, id, name, value, onChange, className, placeholder, ...props}) {
    return (
        <input
            className={`input ${className}`}
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

BasicInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

BasicInput.defaultProps = {
    type: 'text',
    placeholder: '',
    className: '',
};
