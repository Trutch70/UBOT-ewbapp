import React from 'react';
import classes from './Footer.module.css';
import FooterImage from './FooterImage';

const FooterInfo = ({image, imageAlt, onImageClick, content}) => {

    return (
        <div className={classes['footer-info']}>
            <div className={classes.image}>
                <FooterImage onClick={onImageClick}>
                    <img src={image} alt={imageAlt}/>
                </FooterImage>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default FooterInfo;
