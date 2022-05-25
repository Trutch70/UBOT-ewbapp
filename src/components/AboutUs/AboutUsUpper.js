import React from 'react';
import ContentContainer from '../Common/ContentContainer';
import classes from './AboutUs.module.css';

const AboutUsUpper = () => {
    return (
        <section>
            <div className={classes['upper-container']}>
                <ContentContainer>
                    <div className={classes['main-header']}>
                        <span className={"text-blue"}>The Ukrainian economy</span>
                        <br/>
                        <span className={"text-yellow"}>needs your support</span>
                    </div>
                    <div className={classes.paragraph}>
                        <span>
                            On February 24, 2022, our hearts stopped for a moment. However, we could not stand still and watch the Russian army destroying Ukraine. We wanted to act. We wanted to help the Ukrainian economy and bring even a small glimmer of hope to the heroes who remained in Ukraine.
                        </span>
                        <span className={classes.lower}>
                            With 2 Poles, 2 Ukrainians on board and experience in marketing and IT, we decided to bring to life <strong>Ukraine: Back on Track</strong> - a project that aims to support businesses that still operate in Ukraine.
                        </span>
                    </div>
                </ContentContainer>
            </div>
        </section>
    );
};

export default AboutUsUpper;
