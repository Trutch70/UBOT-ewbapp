import React from 'react';
import classes from './Receiver.module.css';

const ReceiverBody = (
    {
        receiver
    }
) => {
    return (
        <div className={classes['receiver-body']}>
            <h1>
                {receiver.name}
            </h1>
            <p>
                {receiver.description}
            </p>
        </div>
    );
};

export default ReceiverBody;
