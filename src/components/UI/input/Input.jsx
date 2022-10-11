import React from 'react';
import "./Input.scss";

const Input = ({type, name, className = "", placeholder, value, required, style, onChange}) => {

    const classes = ["input", className].join(" ").trim();

    return (
        <input
            type={type}
            name={name}
            className={classes}
            placeholder={placeholder}
            value={value}
            required={required}
            style={style}
            onChange={onChange}
        />
    );
};

export default Input;