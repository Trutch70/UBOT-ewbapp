import React from 'react';
import classes from './Receiver.module.css';

const ReceiverTop = (
    {
        receiver
    }
) => {
    return (
        <div className={classes['receiver-top']}>
            {
                receiver &&
                <>
                    {
                        receiver.location &&
                        <span>
                            City: {receiver.location.name} |
                        </span>
                    }
                </>
            }
        </div>
    );
};

export default ReceiverTop;