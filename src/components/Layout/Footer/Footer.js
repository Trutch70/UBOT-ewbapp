import React from 'react';
import classes from './Footer.module.css';
import FooterInfo from './FooterInfo';
import FooterIcons from './FooterIcons';
import loveLetterIcon from '../../../assets/love-letter.png'
import foldedHandsIcon from '../../../assets/folded-hands.png'

const Footer = () => {
    const content1 = (
        <span>
            Send message at <strong>hello@ubackontrack.com</strong> if your business needs support or you know other
            brave entrepreneurs who are fighting for a better tomorrow for Ukraine.
        </span>
    );

    const content2 = (
        <span>
            Please let us know if you have any ideas on how to reach people who can support this project. A great help
            for Ukrainians in need will also be sharing our content on <strong>social media</strong>! Thank you!
        </span>
    );

    return (
        <footer className={classes.footer}>
            <div className={classes['footer-container']}>
                <FooterInfo content={content1}
                            image={loveLetterIcon}
                            imageAlt={"love letter"}
                            imageHref={"mailto:hello@ukraine-back-on-track.com"}
                />
                <FooterInfo content={content2}
                            image={foldedHandsIcon}
                            imageAlt={"folded hands"}
                            imageHref={"https://www.facebook.com/sharer/sharer.php?u=ukraine-back-on-track.com"}
                />
                <FooterIcons />
            </div>
        </footer>
    );
};

export default Footer;
