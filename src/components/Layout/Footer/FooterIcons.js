import React from 'react';
import classes from './Footer.module.css';
import FooterImage from './FooterImage';
import instaLogo from '../../../assets/Instagram_logo_2016.svg'
import facebookLogo from '../../../assets/facebook-108-432507.png'

const FooterIcons = () => {
    return (
        <div className={classes['footer-icons']}>
            <FooterImage href={"https://www.instagram.com/dianakllp/"}>
                <img src={instaLogo} alt={"instagram"}/>
            </FooterImage>
            <FooterImage href={"https://www.facebook.com/Trutch.1"}>
                <img style={{background: '#ffffff'}} src={facebookLogo} alt={"facebook"}/>
            </FooterImage>
        </div>
    );
};

export default FooterIcons;
