import React from 'react';
import classes from './MainPage.module.css';
import ContentContainer from '../Common/ContentContainer';
import instagramIcon from '../../assets/Instagram_Glyph_Gradient_RGB.png';
import Slider from "react-slick";
import Tile from './Tiles/Tile';
import awesome1 from '../../assets/awesome/awesome1.jpeg';
import awesome2 from '../../assets/awesome/awesome2.jpeg';
import awesome3 from '../../assets/awesome/awesome3.jpeg';
import awesome4 from '../../assets/awesome/awesome4.jpeg';

const MainPageMiddle = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        // autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        adaptiveHeight: true,
    };

    return (
        <section className={`${classes['middle-section']}`}>
            <ContentContainer>
                <div className={`${classes['sub-header']} text-yellow`}>
                    Russian warship, go f*ck yourself
                </div>
                <div className={classes['paragraph-container']}>
                    <p>
                        Everyone has their heroes. Our heroes are Ukrainians. Brave and proud people who stand for their land,
                        and their truth. We hope that our project will allow them to survive this difficult time and get back on
                        track a little faster, as soon as Ukraine repels the unjustified agression by Russia. <strong>#standwithukraine</strong>
                    </p>
                </div>
                <div className={classes.insta}>
                    <a target={"_blank"} href={"#"}>
                        <img src={instagramIcon} alt={"instagram icon"}/>
                        <strong className={classes.link}>@juliasun</strong>
                    </a>
                </div>
                <div className={classes['slider-container']}>
                    <Slider {...settings}>
                        <div className={classes['carousel-item']}>
                            <Tile background={awesome4} displayButton={false}/>
                        </div>
                        <div className={classes['carousel-item']}>
                            <Tile background={awesome3} displayButton={false}/>
                        </div>
                        <div className={classes['carousel-item']}>
                            <Tile background={awesome2} displayButton={false}/>
                        </div>
                        <div className={classes['carousel-item']}>
                            <Tile background={awesome1} displayButton={false}/>
                        </div>
                    </Slider>
                </div>
            </ContentContainer>
        </section>
    );
};

export default MainPageMiddle;
