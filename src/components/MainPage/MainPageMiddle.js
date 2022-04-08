import React from 'react';
import classes from './MainPage.module.css';

const MainPageMiddle = () => {
    return (
        <div className={`${classes['middle-section']} content-container`}>
            <div className={`${classes['sub-header']} text-yellow`}>
                Russian warship, go f*ck yourself
            </div>
            <div className={classes['paragraph-container']}>
                <p>
                    Everyone has their heroes. Our heroes are Ukrainians. Brave and proud people who stand for their land,
                    and their truth. We hope that our project will allow them to survive this difficult time and get back on
                    track a little faster, as soon as Ukraine repels the unjustified agression by Russia. <strong>#standwithukraine</strong>
                </p>
            </div>
        </div>
    );
};

export default MainPageMiddle;
