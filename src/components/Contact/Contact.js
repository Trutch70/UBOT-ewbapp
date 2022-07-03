import React from 'react';
import classes from './Contact.module.css';
import ContentContainer from '../Common/ContentContainer';
import sendUsMessage from '../../assets/send-us-message.svg'
import ContactTile from './ContactTile';
import ContactTileListRow from './ContactTileListRow';
import instaLogo from '../../assets/instagram-icon.svg'
import fbLogo from '../../assets/facebook-icon.svg';
import githubLogo from '../../assets/github-icon.svg';

const Contact = () => {

    return (
        <div className={"page-content"}>
            <ContentContainer>
                <img src={sendUsMessage} alt={'Send us a message if you want to help Ukraine too!'} className={classes['main-header']}></img>
                <div className={classes['paragraph-container']}>
                    <p>
                        Ukraine: Back On Track is a platform connecting people ready to help from around the world and those working hard  for a better tomorrow in Ukraine. We want to connect these groups as effectively as possible. So if you have any questions or ideas, need support, or don't know how to place the orders, just write to us using the emails and links below.
                    </p>
                </div>
                <div className={classes['tiles-container']}>
                    <ContactTile>
                        <div className={`${classes['email-container']} ${classes.yellow}`}>
                            <a href={'mailto:hello@ukraine-back-on-track.com'} className={`${classes.email} ${classes.yellow}`}>
                                hello@ukraine-back-on-track.com
                            </a>
                        </div>
                        <ContactTileListRow text={"Ukrainian businesses in need of support"}/>
                        <ContactTileListRow text={"Those willing to help "}/>
                        <ContactTileListRow text={"Media and marketing support"}/>
                        <ContactTileListRow text={"Ideas for improving our initiative"}/>
                        <div className={classes.social}>
                            <a className={classes['social-buttons-container']} target={'_blank'} rel={"noreferrer"} href={'https://www.instagram.com/ukrainebackontrack'}>
                                <img src={instaLogo} alt={"contact us on social media to help with helping ukrainian business"} />
                                <span>ukrainebackontrack</span>
                            </a>
                            <a className={classes['social-buttons-container']} target={'_blank'} rel={"noreferrer"} href={'#ubotfb'}>
                                <img src={fbLogo} alt={"contact us on social media to help with helping ukrainian business"} />
                                    <span>ukrainebackontrack</span>
                            </a>
                        </div>
                    </ContactTile>
                    <ContactTile>
                        <div className={`${classes['email-container']} ${classes.blue}`}>
                            <a href={'mailto:lukasz.traczyk@ukraine-back-on-track.com'} className={`${classes.email} ${classes.blue}`}>
                                lukasz.traczyk@ukraine-back-on-track.com
                            </a>
                        </div>
                        <ContactTileListRow text={"Technical issues and problems"} color={'blue'}/>
                        <ContactTileListRow text={"Questions about the website"} color={'blue'}/>
                        <div className={classes.social}>
                            <a className={classes['social-buttons-container']} target={'_blank'} rel={"noreferrer"} href={'https://github.com/Trutch70/UBOT-api'}>
                                <img src={githubLogo} alt={"contact us on social media to help with helping ukrainian business"} />
                                <span>API</span>
                            </a>
                            <a className={classes['social-buttons-container']} target={'_blank'} rel={"noreferrer"} href={'https://github.com/Trutch70/UBOTwebapp    '}>
                                <img src={githubLogo} alt={"contact us on social media to help with helping ukrainian business"} />
                                <span>webapp</span>
                            </a>
                        </div>
                    </ContactTile>
                </div>
            </ContentContainer>
        </div>
    );
};

export default Contact;
