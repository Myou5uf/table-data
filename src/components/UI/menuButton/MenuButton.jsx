import React from 'react';
import Menu from "../icons/Menu";

const MenuButton = ({onClick}) => {

    return (
        <button
            className="menu"
            style={{backgroundColor: "transparent", cursor: "pointer"}}
            onClick={onClick}
        >
            <Menu/>
        </button>
    );
};

export default MenuButton;