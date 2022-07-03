import React from 'react';
import classes from './Contact.module.css';

const ContactTile = (props) => {

    return (
        <div className={classes.tile}>
            {props.children}
        </div>
    );
};

export default ContactTile;
