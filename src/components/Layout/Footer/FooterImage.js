import React from 'react';
import classes from './FooterImage.module.css';

const FooterImage = (props) => {
    return (
        <a href={props.href} target={"_blank"}>
            <div className={classes.wrapper} onClick={props.onClick}>
                <div className={classes.image}>
                    {props.children}
                </div>
            </div>
        </a>
    );
};

export default FooterImage;
