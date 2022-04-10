import React from 'react';
import classes from './Footer.module.css';

const FooterInfo = ({image, content}) => {
    return (
        <div className={classes['footer-info']}>
            <div className={classes.image}>
                <img src={image} alt={""}/>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default FooterInfo;
