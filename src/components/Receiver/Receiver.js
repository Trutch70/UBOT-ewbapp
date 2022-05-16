import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useReceiversProvider  from '../../hooks/UseReceiversProvider';
import ContentContainer from '../Common/ContentContainer';
import classes from './Receiver.module.css';
import defaultImage from '../../assets/default-image.png';
import ReceiverDescription from './ReceiverDescription';

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
                !error && receiver &&
                <ContentContainer>
                    <div className={classes.container}>
                        <div className={classes['receiver-images']}>
                            <img src={image} alt={`Ukraine ${receiver.name} from ${receiver.location ? receiver.location.name : 'unknown'}`}/>
                        </div>
                        { typeof receiver !== 'undefined' && <ReceiverDescription receiver={receiver} />}
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
