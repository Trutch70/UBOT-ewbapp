import React, { useRef } from 'react';
import classes from './MainPage.module.css';
import MainPageUpper from './MainPageUpper';
import InfiniteTiles from './Tiles/InfiniteTiles';
import MainPageMiddle from './MainPageMiddle';
import MainPageMain from './MainPageMain';
import ContentContainer from '../Common/ContentContainer';

const MainPage = () => {
    const infiniteScrollRef = useRef();

    return (
        <div className={"page-content"}>
            <MainPageUpper/>
            <MainPageMain infiniteScrollRef={infiniteScrollRef} />
            <MainPageMiddle />
            <section ref={infiniteScrollRef} className={`${classes['bottom-section']}`}>
                <ContentContainer>
                    <InfiniteTiles startingPage={2}/>
                </ContentContainer>
            </section>
        </div>
    );
};

export default MainPage;
