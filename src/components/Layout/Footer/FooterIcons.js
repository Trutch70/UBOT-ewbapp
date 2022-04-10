import React from 'react';
import classes from './Footer.module.css';

const FooterIcons = () => {
    return (
        <div className={classes['footer-icons']}>
            <img src={ process.env.PUBLIC_URL + '/logo512.png'}/>
            <img src={ process.env.PUBLIC_URL + '/logo512.png'}/>
        </div>
    );
};

export default FooterIcons;
