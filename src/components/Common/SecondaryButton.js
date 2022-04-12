import React from 'react';
import classes from './SecondaryButton.module.css';

const SecondaryButton = ({
     text,
     type,
     onClick,
 }) => {
    return (
        <button type={type} className={classes.secondary} onClick={onClick}>
            {text}
        </button>
    );
};

export default SecondaryButton;
