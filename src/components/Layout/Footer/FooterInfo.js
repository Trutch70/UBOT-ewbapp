import React from 'react';
import classes from './Footer.module.css';
import FooterImage from './FooterImage';

const FooterInfo = ({image, imageAlt, imageHref, content}) => {

    return (
        <div className={classes['footer-info']}>
            <div className={classes.image}>
                <FooterImage href={imageHref}>
                    <img src={image} alt={imageAlt}/>
                </FooterImage>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default FooterInfo;
