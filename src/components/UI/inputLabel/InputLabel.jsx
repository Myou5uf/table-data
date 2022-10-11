import React from 'react';
import './InputLabel.scss';
import Input from "../input/Input";

const InputLabel = ({type, name, className, placeholder, label, value, onChange, required}) => {

    const cssInputLabel = ["inputLabel", className].join(" ").trim();

    return (
        <div className={cssInputLabel}>
            <label htmlFor={name} className="label">{label}</label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default InputLabel;