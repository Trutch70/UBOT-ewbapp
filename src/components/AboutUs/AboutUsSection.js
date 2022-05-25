import React from 'react';
import ContentContainer from '../Common/ContentContainer';
import classes from './AboutUs.module.css';

const AboutUsSection = (props) => {
    return (
        <section className={`${props.className} ${classes['about-us-section']}`}>
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </section>
    );
};

export default AboutUsSection;
