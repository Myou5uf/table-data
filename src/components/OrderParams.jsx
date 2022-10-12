import React from 'react';
import OrderItem from "./OrderItem";
import OrderButtons from "./UI/orderButtons/OrderButtons";

const OrderParams = ({visibleOrderColumns, visibleColumn, setVisibleColumn}) => {

    const isOpen = visibleOrderColumns ? "show" : "hidden";
    const classes = ["table__orderParams", isOpen].join(" ").trim();

    return (
        <div className={classes}>
            <OrderButtons className="table__orderBtns"/>
            <div className="table__columns">
                <OrderItem
                    name="Name"
                    changeVisibleColumn={() => setVisibleColumn({...visibleColumn, name: !visibleColumn.name})}
                />
                <OrderItem
                    name="User status"
                    changeVisibleColumn={() => setVisibleColumn({...visibleColumn, userStatus: !visibleColumn.userStatus})}
                />
                <OrderItem
                    name="Payment status"
                    changeVisibleColumn={() => setVisibleColumn({...visibleColumn, paymentStatus: !visibleColumn.paymentStatus})}
                />
                <OrderItem
                    name="Amount"
                    changeVisibleColumn={() => setVisibleColumn({...visibleColumn, amount: !visibleColumn.amount})}
                />
            </div>
        </div>
    );
};

export default OrderParams;