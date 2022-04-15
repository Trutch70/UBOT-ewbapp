import React from 'react';
import classes from './HalfSplit.module.css';

const HalfSplit = (props) => {
    return <div className={classes.half}>{props.children}</div>;
};

export default HalfSplit;
