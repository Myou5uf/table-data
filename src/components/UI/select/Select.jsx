import React from 'react';
import classes from "./Select.module.scss";

const Select = ({options, defaultValue, className, onChange}) => {

    const cssClasses = [className, classes.select].join(" ").trim();

    return (
        <div className={classes.wrapper}>
            <select
                className={cssClasses}
                defaultValue={defaultValue.value}
                onChange={event => onChange(event.target.value)}
            >
                <option value={defaultValue.value} disabled hidden>{defaultValue.text}</option>
                {options.map((option, i) =>
                    <option value={option} key={option}>
                        {option}
                    </option>
                )}
            </select>
        </div>
    );
};

export default Select;