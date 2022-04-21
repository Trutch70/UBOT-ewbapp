import React from 'react';
import classes from './Steps.module.css';

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
                <div className={classes['arrow-blue']}></div>
            </div>
            <div className={classes.step}>
                <div className={`${classes['step-icon']} ${classes['step-icon-read']}`}>
                    <div className={classes.read}/>
                </div>
                <div className={classes['step-text']}>
                    Read their story
                </div>
            </div>
            <div className={classes.arrow}>
                <div className={classes['arrow-yellow']}></div>
            </div>
            <div className={classes.step}>
                <div className={classes['step-icon']}>
                    <div className={classes.donate}/>
                </div>
                <div className={classes['step-text']}>
                    Donate to the provided bank account
                </div>
            </div>
            <div className={`${classes.arrow} ${classes.done}`}>
                <div></div>
            </div>
        </div>
    );
};

export default Steps;
