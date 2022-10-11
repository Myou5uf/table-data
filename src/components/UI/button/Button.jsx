import React from 'react';
import classes from "./Button.module.scss";

const Button = ({children, onClick, type, style }) => {
    return (
        <button
            type={type}
            className={classes.btn}
            style={style}
            onClick={onClick}
            >{children}
        </button>
    );
};

export default Button;