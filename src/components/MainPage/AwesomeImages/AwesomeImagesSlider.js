import React from 'react';
import getAwesomeImages from '../../../services/GetAwesomeImages';
import Slider from "react-slick";
import AwesomeImage from './AwesomeImage';

const AwesomeImagesSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    return (
        <Slider {...settings}>
            {
                getAwesomeImages().map((image, index) => {
                    return (
                        <div key={`awesome_${index}`}>
                            <AwesomeImage background={image} displayButton={false}/>
                        </div>
                    );
                })
            }
        </Slider>
    );
};

export default AwesomeImagesSlider;
