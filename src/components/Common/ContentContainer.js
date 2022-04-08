import React from 'react';
import classes from './ContentContainer.module.css';

const ContentContainer = (props) => {
    return <div className={`${classes['content-container']} ${props.className}`}>{props.children}</div>;
};

export default ContentContainer;
