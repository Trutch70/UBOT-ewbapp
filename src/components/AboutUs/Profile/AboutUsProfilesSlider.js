import React  from 'react';
import Slider from 'react-slick';
import Profile from './Profile';

const AboutUsProfilesSlider = (
    {
        authors
    }
) => {
    const settings = {
        dots: true,
        arrows: false
    }

    return (
        <Slider {...settings}>
            {
                authors.map(author => {
                    return <Profile  key={author.name} author={author} />
                })
            }
        </Slider>
    );
};

export default AboutUsProfilesSlider;
