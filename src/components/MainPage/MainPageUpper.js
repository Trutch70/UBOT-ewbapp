import React from 'react';
import classes from './MainPage.module.css';
import ContentContainer from '../Common/ContentContainer';

const MainPageUpper = () => {
    return (
        <section className={`${classes['main-page-upper']}`}>
            <ContentContainer>
                <div className={classes['main-header']}>
                    <span className={"text-blue"}>Help small businesses</span><br/><span className={"text-yellow"}>stay afloat in invaded Ukraine</span>
                </div>
                <p>
                    <strong>Due to the Russian invasion,</strong> thousands of Ukrainian businesses had to close down or reduce the scale
                    of operations. Despite this, many brave people cannot imagine giving up the businesses that were
                    their whole life. <strong>Unfortunately, while sales stagnate, bills and employees have to be paid.</strong> Help
                    small businesses survive and support the Ukrainian economy. When the war is over and justice
                    triumphs, <strong>they will help Ukrainians regain peace, stability and a sense of security.</strong>
                </p>
            </ContentContainer>
        </section>
    );
};

export default MainPageUpper;
