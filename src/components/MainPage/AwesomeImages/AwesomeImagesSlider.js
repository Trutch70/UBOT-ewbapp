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
        autoplaySpeed: 6000,
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
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
