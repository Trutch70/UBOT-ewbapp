import React from 'react';
import AboutUsSection from './AboutUsSection';
import classes from './AboutUs.module.css';

const AboutUsWhyWeDoIt = () => {
    return (
        <AboutUsSection>
            <div className={classes.left}>
                <div className={`${classes.header} text-yellow`}>
                    Why we do it?
                </div>
                <div className={classes.paragraph}>
                    Humanitarian aid and support for the army are not enough. People who struggle to survive their small businesses also need money. Supply and demand are falling. Entrepreneurs stop earning, employees lose their jobs and companies go bankrupt. Once Putin and his troops are driven out, the country will have to rise from the rubble. That is why today it is also important to help hundreds of small businesses. Businesses that will be ready for the return of millions of refugees and a normal life.
                </div>
            </div>
            <div className={classes.right}>
                <img src={"https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={"awesome1"}/>
            </div>
        </AboutUsSection>
    );
};

export default AboutUsWhyWeDoIt;
