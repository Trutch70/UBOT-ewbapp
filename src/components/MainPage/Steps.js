import React from 'react';
import classes from './Steps.module.css';
import arrowBlue from '../../assets/step-arrow-blue.svg';
import arrowYellow from '../../assets/step-arrow-yellow.svg';
import mobileArrowBlue from '../../assets/step-mobile-arrow-blue.svg';
import mobileArrowYellow from  '../../assets/step-mobile-arrow-yellow.svg';

const Steps = () => {
    return (
        <div className={classes.steps}>
            <div className={classes.step}>
                <div className={classes['step-icon']}>
                    <div className={classes.case}/>
                </div>
                <div className={classes['step-text']}>
                    Choose the business you want to support
                </div>
            </div>
            <div className={classes.arrow}>
                <img src={window.innerWidth >= 1024 ? arrowBlue : mobileArrowBlue} alt={"arrow blue"}></img>
            </div>
            <div className={classes.step}>
                <div className={classes['step-container']}>
                    <div className={`${classes['step-icon']} ${classes['step-icon-read']}`}>
                        <div className={classes.read}/>
                    </div>
                    <div className={classes['step-text']}>
                        Read their story
                    </div>
                </div>
            </div>
            <div className={classes.arrow}>
                <img src={window.innerWidth >= 1024 ? arrowYellow : mobileArrowYellow} alt={"arrow yellow"}/>
            </div>
            <div className={classes.step}>
                <div className={classes['step-icon']}>
                    <div className={classes.donate}/>
                </div>
                <div className={classes['step-text']}>
                    Buy a product using social media networks or a shop’s website.
                </div>
            </div>
        </div>
    );
};

export default Steps;
