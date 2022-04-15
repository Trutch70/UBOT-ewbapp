import React from 'react';
import AboutUsSection from './AboutUsSection';
import classes from './AboutUs.module.css';

const AboutUsWhoWeAre = () => {
    return (

        <AboutUsSection className={classes['bg-grey']}>
            <div className={classes.left}>
                <img src={"https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={"awesome1"}/>
            </div>
            <div className={classes.right}>
                <div className={`${classes.header} text-blue`}>
                    Who we are?
                </div>
                <div className={`${classes.paragraph} ${classes['paragraph-indent-right']}`}>
                    2 of us were born and raised in Ukraine. Together with our friends from Poland we have created this website using knowledge in IT and marketing. Thanks to <strong>Ukraine: Back on Track</strong>, we can help the Ukrainians now and after the end of the Russian invasion.
                    <br/>
                    <br/>
                    The idea was born when Russia attacked Ukraine. We were terrified. Many of our relatives and friend lost their jobs and sense of stability within a few days. It was their stories that inspired us to help Ukrainian businesses survive this difficult time.
                </div>
            </div>
        </AboutUsSection>
    );
};

export default AboutUsWhoWeAre;
