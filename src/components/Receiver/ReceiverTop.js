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
                    {
                        receiver.web_page &&
                        <span className={classes['span-margin-left']}>
                            <a href={receiver.web_page}>
                                {receiver.web_page.replace('https://', '')}
                            </a> |
                        </span>
                    }
                    {
                        receiver.instagram &&
                        <span className={classes['span-margin-left']}>
                            <a href={'https://instagram.com/' + receiver.instagram}>{`@${receiver.instagram}`}</a>
                        </span>
                    }
                </>
            }
        </div>
    );
};

export default ReceiverTop;