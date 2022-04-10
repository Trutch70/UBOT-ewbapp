import React from 'react';
import classes from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={`${classes['not-found-container']} page-content`}>
            <div className={classes['not-found']}>
                <h1 className={"text-blue"}>The page you looked for hasn't been found :(</h1>
                <h1 className={"text-yellow"}>Slava Ukraini!</h1>
            </div>
        </div>
    );
};

export default NotFound;
