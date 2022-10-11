import React from 'react';
import classes from "./inputSearch.module.scss";

const InputSearch = ({value, onChange, className, placeholder}) => {

    const cssClasses = [className, classes.inputSearch].join(" ").trim();

    return (
        <div className={classes.wrapper}>
            <input
                value={value}
                onChange={onChange}
                className={cssClasses}
                placeholder={placeholder}
            />
        </div>

    );
};

export default InputSearch;