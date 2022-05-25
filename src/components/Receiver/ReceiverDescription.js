import React from 'react';
import classes from './Receiver.module.css';
import ReceiverTop from './ReceiverTop';
import ReceiverBody from './ReceiverBody';
import ReceiverBottom from './ReceiverBottom';

const ReceiverDescription = (
    {
        receiver
    }
) => {
    return (
        <div className={classes['receiver-description']}>
            <ReceiverTop receiver={receiver} />
            <ReceiverBody receiver={receiver}/>
            <ReceiverBottom receiver={receiver}/>
        </div>
    );
};

export default ReceiverDescription;
