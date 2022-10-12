import React, {useState} from 'react';

const OrderItem = ({name, changeVisibleColumn}) => {

    const [visible, setVisible] = useState(true);

    const changeVisible = () => {
        setVisible(!visible);
        changeVisibleColumn();
    }

    const classes = ["table__item"];

    if (!visible) {
        classes.push("table__item_active");
    }

    return (
        <div
            className={classes.join(" ")}
            onClick={changeVisible}
        >
            <span className="table__columnTitle columnTitle">{name}</span>
            <span className="table__eye">
                <img src={visible ? "/img/icons/on.svg" : "/img/icons/off.svg"} alt="eye"/>
            </span>
        </div>
    );
};

export default OrderItem;