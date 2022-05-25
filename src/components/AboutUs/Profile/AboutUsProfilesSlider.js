import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Profile from './Profile';

const AboutUsProfilesSlider = (
    {
        authors
    }
) => {
    const onLoad = () => {
        const profiles = document.querySelectorAll('[data-query="profile"]');

        console.log(profiles);

        if (!profiles.length) {
            setTimeout(onLoad, 100);
            return;
        }

        let maxHeight = 0;

        profiles.forEach(profile => {
            if (profile.clientHeight > maxHeight) {
                maxHeight = profile.clientHeight;
            }
        });

        console.log(maxHeight);

        profiles.forEach(profile => {
            profile.height = maxHeight;
        });
    };

    useEffect(() => {
        window.onload = onLoad;
    }, []);


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
