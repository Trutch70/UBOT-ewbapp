import React from 'react';
import classes from './Receiver.module.css';

const ReceiverBottom = (
    {
        receiver
    }
) => {
    return (
        <div className={classes['receiver-bottom']}>
            Every little help makes a difference, no matter the amount 🇺🇦<br/>
            IBAN: {receiver.bank_account}
        </div>
    );
};

export default ReceiverBottom;
