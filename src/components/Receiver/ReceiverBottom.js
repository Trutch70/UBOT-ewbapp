import React from 'react';
import classes from './Receiver.module.css';

const ReceiverBottom = (
    {
        receiver
    }
) => {
    return (
        <div className={classes['receiver-bottom']}>
            <h2>{receiver.donation_description ?? ''}</h2>
            <br/>
            {
                receiver['links'].map((link) => {
                    return <div key={link.name}><span className={classes['link-title']}>{link.name}:</span> <a href={link.url} rel={"noreferrer"} target={"_blank"}>{link.url}</a></div>;
                })
            }

        </div>
    );
};

export default ReceiverBottom;
