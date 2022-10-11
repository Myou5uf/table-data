import React from 'react';
import OrderItem from "./OrderItem";
import OrderButtons from "./UI/orderButtons/OrderButtons";

const OrderParams = ({visibleOrderColumns}) => {

    const isOpen = visibleOrderColumns ? "show" : "hidden";
    const classes = ["table__orderParams", isOpen].join(" ").trim();

    return (
        <div className={classes}>
            <OrderButtons className="table__orderBtns"/>
            <div className="table__columns">
                <OrderItem name="Name" src="/img/icons/off.svg" href="#"/>
                <OrderItem name="User status" src="/img/icons/off.svg" href="#"/>
                <OrderItem name="Payment status" src="/img/icons/off.svg" href="#"/>
                <OrderItem name="Amount" src="/img/icons/off.svg" href="#"/>
            </div>
        </div>
    );
};

export default OrderParams;