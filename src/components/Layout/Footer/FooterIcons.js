import React from 'react';
import classes from './Footer.module.css';
import FooterImage from './FooterImage';
import instaLogo from '../../../assets/insta.svg'
import facebookLogo from '../../../assets/fb.svg'

const FooterIcons = () => {
    return (
        <div className={classes['footer-icons']}>
            <FooterImage href={"https://www.instagram.com/ukrainebackontrack/"}>
                <img src={instaLogo} alt={"instagram"}/>
            </FooterImage>
            <FooterImage href={"https://www.facebook.com/Ukraine-back-on-track-109228915195265"}>
                <img src={facebookLogo} alt={"facebook"}/>
            </FooterImage>
        </div>
    );
};

export default FooterIcons;
