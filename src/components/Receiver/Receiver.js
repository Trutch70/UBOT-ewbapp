import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useReceiversProvider  from '../../hooks/UseReceiversProvider';
import ContentContainer from '../Common/ContentContainer';
import classes from './Receiver.module.css';
import defaultImage from '../../assets/default-image.png';
import locationIcon from '../../assets/iconmonstr-location-1.svg';

const Receiver = () => {
    const [receiver, setReceiver] = useState({});
    const [error, setError] = useState(null);
    const { receiverId } = useParams();
    const receiversProvider = useReceiversProvider();

    let image = defaultImage;
    if (receiver && receiver.image_path) {
        image = receiver.image_path;
    }

    useEffect(() => {
        receiversProvider.fetchReceiver(receiverId)
            .then(data => setReceiver(data))
            .catch(error => {
                switch(error.message) {
                    case 'NOTFOUND':
                        window.location.href = '/404'
                        break;
                    default:
                        setError(error.message);
                        break;
                }
            })
    }, [receiverId, receiversProvider])

    return (
        <div className={"page-content"}>
            {
                !error &&
                <ContentContainer>
                    <div className={classes.container}>
                        <div className={classes['image-container']}>
                            <img src={image} alt={"business"} />
                        </div>
                        <div className={classes['info-container']}>
                            <div className={classes['city-container']}>
                                <img src={process.env.PUBLIC_URL + '/logo512.png'} className={classes.icon} alt={"placeholder"}/>
                                <img src={locationIcon} className={`${classes.icon} ${classes.location}`} alt={"location icon"}/>
                                <div className={classes.city}>{receiver.location ? receiver.location.name : "Exact Location not given"}</div>
                            </div>
                            <div className={classes.header}>
                                {receiver.name}
                            </div>
                            <div className={classes.description}>
                                {receiver.description}
                            </div>
                            <div>
                                <strong>IBAN: </strong>{receiver.bank_account}
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            }
            {
                error && <strong>{error}</strong>
            }
        </div>
    );
};

export default Receiver;
