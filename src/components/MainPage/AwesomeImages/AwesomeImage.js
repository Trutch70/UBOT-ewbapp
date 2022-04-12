import React from 'react';
import classes from './AwesomeImage.module.css';

const AwesomeImage = ({background}) => {
    const style = {
            background: `url(${background})`,
            backgroundSize: 'cover',
        };

    return (
        <div className={classes.tile} style={style}>
            <div className={classes.wrapper}>
            </div>
        </div>
    )
};

export default AwesomeImage;
