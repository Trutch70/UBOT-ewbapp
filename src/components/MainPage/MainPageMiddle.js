import React from 'react';
import classes from './MainPage.module.css';
import ContentContainer from '../Common/ContentContainer';
import instagramIcon from '../../assets/Instagram_logo_2016.svg';
import AwesomeImagesSlider from './AwesomeImages/AwesomeImagesSlider';

const MainPageMiddle = () => {
    return (
        <section className={`${classes['middle-section']}`}>
            <ContentContainer>
                <div className={`${classes['sub-header']} text-blue`}>
                    Russian warship, go f*ck yourself
                </div>
                <div className={classes['paragraph-container']}>
                    <p>
                        Everyone has their heroes. Our heroes are Ukrainians. Brave and proud people who stand for their land,
                        and their truth. We hope that our project will allow them to survive this difficult time and get back on
                        track a little faster, as soon as Ukraine repels the unjustified aggression by Russia. <strong>#standwithukraine</strong>
                    </p>
                </div>
                <div className={classes['slider-container']}>
                    <AwesomeImagesSlider />
                </div>
                <div className={classes.insta}>
                    <a target={"_blank"} rel={"noreferrer"} href={"https://www.instagram.com/jualiasun/"}>
                        <img src={instagramIcon} alt={"instagram icon"}/>
                        <strong className={classes.link}>@jualiasun</strong>
                    </a>
                </div>
            </ContentContainer>
        </section>
    );
};

export default MainPageMiddle;
