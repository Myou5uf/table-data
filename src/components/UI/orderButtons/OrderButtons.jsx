import React from 'react';
import "./OrderButtons.scss"
import ArrowButton from "../arrowButton/ArrowButton";

const OrderButtons = ({className = ""}) => {

    const classes = [className, "orderButtons"].join(" ").trim();

    return (
        <div className={classes}>
            <div className="orderButtons__left">
                <ArrowButton
                    className="orderButtons__doubleArrowBtnLeft"
                    direction="left"
                    arrowCount={2}
                />
                <ArrowButton
                    className="orderButtons__arrowBtnLeft"
                    direction="left"
                    arrowCount={1}
                />
            </div>
            <div className="orderButtons__right">
                <ArrowButton
                    className="orderButtons__arrowBtn"
                    direction="right"
                    arrowCount={1}
                />
                <ArrowButton
                    className="orderButtons__doubleArrowBtn"
                    direction="right"
                    arrowCount={2}
                />
            </div>
        </div>
    );
};

export default OrderButtons;