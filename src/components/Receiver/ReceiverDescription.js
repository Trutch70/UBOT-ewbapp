import React from 'react';
import classes from './Receiver.module.css';
import ReceiverShipping from './ReceiverShipping';
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
            <ReceiverShipping international={receiver.international_shipping} />
            <ReceiverTop receiver={receiver} />
            <ReceiverBody receiver={receiver}/>
            <ReceiverBottom receiver={receiver}/>
        </div>
    );
};

export default ReceiverDescription;
