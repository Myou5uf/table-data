import React from 'react';

const OrderItem = ({name, src, href}) => {
    return (
        <div className="table__item">
            <span className="table__columnTitle columnTitle">{name}</span>
            <a href={href}>
                <img src={src} alt="eye"/>
            </a>
        </div>
    );
};

export default OrderItem;