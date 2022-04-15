import React from 'react';
import classes from './AboutUs.module.css';

const AboutUsGetInvolved = () => {
    return (
        <section className={classes['get-involved']}>
            <div className={`${classes.header} text-blue`}>
                Get involved!
            </div>
            <div className={classes.paragraph}>
                We want to reach as many people as possible who could help businesses operating in war-torn Ukraine. Each share on social media is a greater range of action and a chance for support. Let's help the Ukrainian economy survive. Putin will be defeated soon. And then we'll need all of these little businesses like never before! Together we can help them.
            </div>
        </section>
    );
};

export default AboutUsGetInvolved;
