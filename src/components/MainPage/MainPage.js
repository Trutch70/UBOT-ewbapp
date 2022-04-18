import React from 'react';
import classes from './MainPage.module.css';
import MainPageUpper from './MainPageUpper';
import InfiniteTiles from '../Common/Tiles/InfiniteTiles';
import MainPageMiddle from './MainPageMiddle';
import MainPageMain from './MainPageMain';
import ContentContainer from '../Common/ContentContainer';

const MainPage = () => {
    return (
        <div className={"page-content"}>
            <MainPageUpper/>
            <MainPageMain />
            <MainPageMiddle />
            <section className={`${classes['bottom-section']}`}>
                <ContentContainer>
                    <InfiniteTiles startingPage={2}/>
                </ContentContainer>
            </section>
        </div>
    );
};

export default MainPage;
