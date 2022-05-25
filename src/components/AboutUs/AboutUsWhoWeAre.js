import React from 'react';
import AboutUsSection from './AboutUsSection';
import classes from './AboutUs.module.css';
import AboutUsProfiles from './AboutUsProfiles';

const AboutUsWhoWeAre = () => {
    return (
        <AboutUsSection className={classes['who-we-are']}>
            <div className={classes.header}>
                Who we are?
            </div>
            <AboutUsProfiles/>
        </AboutUsSection>
    );
};

export default AboutUsWhoWeAre;
