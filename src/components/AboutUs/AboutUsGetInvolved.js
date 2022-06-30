import React from 'react';
import classes from './AboutUs.module.css';
import AboutUsSection from './AboutUsSection';
import getInvolved from '../../assets/get-involved.png';

const AboutUsGetInvolved = () => {
    return (
        <AboutUsSection className={classes['get-involved']}>
            <div className={classes['get-involved-header']}>
                <img src={getInvolved} alt={"get involved in helping ukraine during and after the war!"}/>
            </div>
            <div className={classes.paragraph}>
                We want to reach as many people as possible who could help businesses operating in war-torn Ukraine. Each share on social media is a greater range of action and a chance for support. Let's help the Ukrainian economy survive. Putin will be defeated soon. And then we'll need all of these little businesses like never before! <strong>Together we can help them.</strong>
            </div>
        </AboutUsSection>
    );
};

export default AboutUsGetInvolved;
