import React from 'react';
import classes from './Footer.module.css';

const FooterIcons = () => {
    return (
        <div className={classes['footer-icons']}>
            <img src={ process.env.PUBLIC_URL + '/logo512.png'} alt={"placeholder"}/>
            <img src={ process.env.PUBLIC_URL + '/logo512.png'} alt={"placeholder"}/>
        </div>
    );
};

export default FooterIcons;
