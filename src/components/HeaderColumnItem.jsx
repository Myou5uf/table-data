import React from 'react';

const HeaderColumnItem = ({name, src, className = "", visible}) => {

    const classes = [className];

    if (!visible) {
        classes.push("column_hidden");
    }

    return (
        <div className={classes.join(" ")}>
            <span className="table__rect rect"></span>
            <div className="table__columnTitle columnTitle">{name}</div>
            <span>
                <img className="table__sortIcon sortIcon" src={src} alt="asc"/>
            </span>
        </div>
    );
};

export default HeaderColumnItem;