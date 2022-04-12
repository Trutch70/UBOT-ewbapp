import React from 'react';
import classes from './MainButton.module.css';

const MainButton = ({
    text,
    type,
    onClick,
}) => {
    return (
        <button type={type} className={classes.main} onClick={onClick}>
            {text}
        </button>
    );
};

export default MainButton;
