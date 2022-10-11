import React from 'react';

const HeaderColumnItem = ({name, src, className = ""}) => {

    return (
        <div className={className.trim()}>
            <span className="table__rect rect"></span>
            <div className="table__columnTitle columnTitle">{name}</div>
            <a href="#">
                <img className="table__sortIcon sortIcon" src={src} alt="asc"/>
            </a>
        </div>
    );
};

export default HeaderColumnItem;