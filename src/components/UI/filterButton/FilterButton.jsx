import React from 'react';

import classes from "./FilterButton.module.scss";

const FilterButton = ({children, style, onClick}) => {
    return (
        <button
            className={classes.btnFilter}
            style={style}
            onClick={onClick}
            >{children}
        </button>
    );
};

export default FilterButton;