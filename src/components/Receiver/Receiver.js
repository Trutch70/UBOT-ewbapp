import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentContainer from '../Common/ContentContainer';
import classes from './Receiver.module.css';
import defaultImage from '../../assets/default-image.png';
import ReceiverDescription from './ReceiverDescription';
import Slider from "react-slick";
import AwesomeImage from '../MainPage/AwesomeImages/AwesomeImage';
import ReceiversProvider from '../../app/ReceiversProvider';

const Receiver = () => {
    const [receiver, setReceiver] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { receiverId } = useParams();

    useEffect(() => {
        ReceiversProvider.fetchReceiver(receiverId)
            .then(data => setReceiver(data))
            .then(() => setLoaded(true))
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
        ;
    }, [receiverId])

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    let imagesContent =
        <div className={classes['receiver-images']}>
            <img src={defaultImage} alt={`Ukraine business ${receiver.name} from ${receiver.location ? receiver.location.name : 'unknown'}`}/>
        </div>

    if (loaded) {
        imagesContent =
            <div className={classes['receiver-images']}>
                <Slider {...sliderSettings}>
                    {
                        receiver.images.map((imagePath, index) => {
                            return (
                                <div key={`awesome_${index}`}>
                                    <AwesomeImage background={imagePath} center={true} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        ;
    }

    return (
        <div className={"page-content"}>
            {
                !error && loaded &&
                <ContentContainer>
                    <div className={`receiver ${classes.container}`}>
                        {
                            imagesContent
                        }
                        <div className={classes['description-container']}>
                            <ReceiverDescription receiver={receiver} />
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
