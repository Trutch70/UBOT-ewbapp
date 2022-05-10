import React from 'react';
import classes from './Footer.module.css';
import FooterIcons from './FooterIcons';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes['footer-container']}>
                <p>Send message at <a href={"mailto:hello@ukraine-back-on-track.com"} className={classes['footer-email']}>hello@ukraine-back-on-track.com</a> if your business needs support or you know other brave entrepreneurs who are fighting for a better tomorrow for Ukraine.</p>
                <FooterIcons />
            </div>
        </footer>
    );
};

export default Footer;
