import React from 'react';
import ContentContainer from '../Common/ContentContainer';
import HalfSplit from '../Common/HalfSplit';
import classes from './AboutUs.module.css';

const AboutUsSection = (props) => {
    return (
        <section className={`${props.className} ${classes['about-us-section']}`}>
            <ContentContainer>
                <HalfSplit>
                    {props.children}
                </HalfSplit>
            </ContentContainer>
        </section>
    );
};

export default AboutUsSection;
