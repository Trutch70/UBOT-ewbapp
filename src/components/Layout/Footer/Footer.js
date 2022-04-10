import React from 'react';
import classes from './Footer.module.css';
import FooterInfo from './FooterInfo';
import FooterIcons from './FooterIcons';

const Footer = () => {
    const content1 = (
        <span>Send message at <strong>hello@ubackontrack.com</strong> if your business needs support or you know other brave entrepreneurs who are fighting for a better tomorrow for Ukraine.</span>
    );

    const content2 = (
        <span>Please let us know if you have any ideas on how to reach people who can support this project. A great help for Ukrainians in need will also be sharing our content on <strong>social media</strong>! Thank you!</span>
    );
    return (
        <footer className={classes.footer}>
            <div className={classes['footer-container']}>
                <FooterInfo content={content1} image={process.env.PUBLIC_URL + "/logo512.png"} />
                <FooterInfo content={content2} image={process.env.PUBLIC_URL + "/logo512.png"} />
                <FooterIcons />
            </div>
        </footer>
    );
};

export default Footer;
