import React from 'react';
import "./ArrowButton.scss"
import Arrow from "../icons/Arrow";

const ArrowButton = ({direction = "right", className = "", arrowCount = 1}) => {

    const classes = [className, "arrowBtn"].join(" ").trim();

    return (
        <button
            className={classes}>
            {
                [...Array(arrowCount)].map((item, index) =>
                    <Arrow
                        key={index}
                        direction={direction}
                    /> )
            }
        </button>
    );
};

export default ArrowButton;