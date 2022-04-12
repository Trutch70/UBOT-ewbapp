import React from 'react';
import classes from './Footer.module.css';
import FooterImage from './FooterImage';
import instaLogo from '../../../assets/Instagram_logo_2016.svg'
import facebookLogo from '../../../assets/facebook-108-432507.png'

const FooterIcons = () => {
    const instagramOnClickHandler = () => {
        window.open('https://www.facebook.com/Trutch.1');
    }

    const facebookOnClickHandler = () => {
        window.open('https://www.instagram.com/dianakllp/');
    }

    return (
        <div className={classes['footer-icons']}>
            <FooterImage onClick={instagramOnClickHandler}>
                <img src={instaLogo} alt={"instagram"}/>
            </FooterImage>
            <FooterImage onClick={facebookOnClickHandler}>
                <img style={{background: '#ffffff'}} src={facebookLogo} alt={"facebook"}/>
            </FooterImage>
        </div>
    );
};

export default FooterIcons;
