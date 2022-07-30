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
            <p dangerouslySetInnerHTML={{__html: receiver.description.replace(/\n/, '<br/>')}}/>
        </div>
    );
};

export default ReceiverBody;
