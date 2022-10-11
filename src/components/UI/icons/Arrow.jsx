import React from 'react';

const Arrow = ({direction = "right"}) => {

    let styleDirection = 0;
    if (direction === "left"){
        styleDirection = 180;
    } else if (direction === "top") {
        styleDirection = 270;
    } else if (direction === "bottom"){
        styleDirection = 90;
    }

    return (
        <svg
            style={{transform: `rotate(${styleDirection}deg)`}}
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 13L7 7L1 1"
                stroke="#8B83BA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Arrow;