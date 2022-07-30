import React from 'react';
import classes from './AwesomeImage.module.css';

const AwesomeImage = ({
  background,
  center = false
}) => {
    const style = {
            background: `url(${background}) ${center ? '50% 50%' : ''}`,
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
