import React from 'react';
import AboutUsSection from './AboutUsSection';
import classes from './AboutUs.module.css';

const AboutUsWhyWeDoIt = () => {
    return (
        <AboutUsSection className={classes['bg-grey']}>
            <div className={classes['why-main']}>
                <div className={classes.header}>
                    Why we do it?
                </div>
                <div className={classes.paragraph}>
                    Humanitarian aid and support for the army are not enough. People who struggle to survive their small businesses also need money. Supply and demand are falling. Entrepreneurs stop earning, employees lose their jobs and companies go bankrupt. Once Putin and his troops are driven out, the country will have to rise from the rubble. That is why today it is also important to help hundreds of small businesses. Businesses that will be ready for the return of millions of refugees and a normal life.
                </div>
            </div>
        </AboutUsSection>
    );
};

export default AboutUsWhyWeDoIt;
