import React from 'react';
import classes from './Footer.module.css';
import FooterImage from './FooterImage';
import instaLogo from '../../../assets/insta.svg'
import facebookLogo from '../../../assets/fb.svg'

const FooterIcons = () => {
    return (
        <div className={classes['footer-icons']}>
            <FooterImage href={"https://www.instagram.com/dianakllp/"}>
                <img src={instaLogo} alt={"instagram"}/>
            </FooterImage>
            <FooterImage href={"https://www.facebook.com/Trutch.1"}>
                <img src={facebookLogo} alt={"facebook"}/>
            </FooterImage>
        </div>
    );
};

export default FooterIcons;
