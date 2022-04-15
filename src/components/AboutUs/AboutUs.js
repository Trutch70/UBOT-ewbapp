import React from 'react';
import AboutUsUpper from './AboutUsUpper';
import classes from './AboutUs.module.css';
import AboutUsWhoWeAre from './AboutUsWhoWeAre';
import AboutUsWhyWeDoIt from './AboutUsWhyWeDoIt';
import AboutUsProfiles from './AboutUsProfiles';
import AboutUsGetInvolved from './AboutUsGetInvolved';

const AboutUs = () => {
    return (
        <div className={`page-content ${classes['about-us']}`}>
            <AboutUsUpper />
            <AboutUsWhoWeAre />
            <AboutUsWhyWeDoIt />
            <AboutUsProfiles />
            <AboutUsGetInvolved />
        </div>
    );
};

export default AboutUs;
