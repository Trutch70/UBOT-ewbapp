import React from 'react';
import classes from './Contact.module.css';

const ContactTileListRow = ({
    text,
    color = 'yellow'
}) => {
    return (
        <div className={`${classes['list-item']} ${color === 'blue' ? classes.blue : classes.yellow}`}>
            <div className={classes['list-circle']}></div>
            <div className={classes['list-item-text']}>
                {text}
            </div>
        </div>
    );
};

export default ContactTileListRow;
