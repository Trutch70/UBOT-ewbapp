import React from 'react';
import classes from './FooterImage.module.css';

const FooterImage = (props) => {
    return (
        <div className={classes.wrapper} onClick={props.onClick}>
            <div className={classes.image}>
                {props.children}
            </div>
        </div>
    );
};

export default FooterImage;
