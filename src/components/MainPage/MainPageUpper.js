import React from 'react';
import classes from './MainPage.module.css';
import MainButton from '../Common/MainButton';

const MainPageUpper = () => {
    return (
        <section className={`${classes['main-page-upper']} content-container`}>
            <div className={classes['main-header']}>
                <span className={"text-blue"}>Help small businesses</span><br/><span className={"text-yellow"}>stay afloat in invaded Ukraine</span>
            </div>
            <p>
                Due to the Russian invasion, thousands of Ukrainian businesses had to close down or reduce the scale
                of operations. Despite this, many brave people cannot imagine giving up the businesses that were
                their whole life. Unfortunately, while sales stagnate, bills and employees have to be paid. Help
                small businesses survive and support the Ukrainian economy. When the war is over and justice
                triumphs, they will help Ukrainians regain peace, stability and a sense of security.
            </p>
            <div className={classes['main-button-container']}>
                <MainButton type={"button"} text={"Find out more"}/>
            </div>
        </section>
    );
};

export default MainPageUpper;
