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
                        receiver.locations &&
                        <span>
                            City: {receiver.locations.map(location => location.name).join(' | ')}
                        </span>
                    }
                </>
            }
        </div>
    );
};

export default ReceiverTop;