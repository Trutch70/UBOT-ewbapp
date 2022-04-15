import React from 'react';
import AwesomeImage from '../MainPage/AwesomeImages/AwesomeImage';
import awesomeImage from '../../assets/awesome/awesome1.jpeg';
import ContentContainer from '../Common/ContentContainer';
import classes from './AboutUs.module.css';

const AboutUsUpper = () => {
    return (
        <section>
            <div className={classes['upper-container']}>
                <ContentContainer>
                    <div className={classes.header}>
                        <span className={"text-blue"}>The Ukrainian economy</span>
                        <br/>
                        <span className={"text-yellow"}>needs our support</span>
                    </div>
                    <div className={classes.paragraph}>
                        <strong>On February 24, 2022, our hearts stopped for a moment. However, we could not stand still and watch how the Russian army is destroying beautiful Ukrainian cities.</strong>
                        <br/>
                        <br/>
                        Knowing that professionals are already involved in humanitarian aid, we decided to bring even a small glimmer of hope to the heroes who are fighting for their lives and their small businesses. We believe that Ukraine's victory is just around the corner. And when the war is over, the economy will need these small businesses like never before.
                    </div>
                </ContentContainer>
                <AwesomeImage background={awesomeImage}/>
            </div>
        </section>
    );
};

export default AboutUsUpper;
