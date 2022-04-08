import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.css';
import { fetchReceivers } from '../../services/ReceiversProvider';
import MainPageUpper from './MainPageUpper';
import Tiles from './Tiles';
import InfiniteTiles from './InfiniteTiles';
import MainPageMiddle from './MainPageMiddle';

const MainPage = () => {
    const [receivers, setReceivers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReceivers()
            .then(data => {
                setReceivers(data);
                setLoading(false);
            })
    }, []);

    return (
        <>
            <MainPageUpper/>
            <section>
                <div className={`${classes['main-section']} content-container`}>
                    <div className={`${classes['sub-header']} text-yellow`}>
                        Meet those who continue to operate in Ukraine:
                    </div>
                    <Tiles receivers={receivers} loading={loading} loadingTilesAmount={4} />
                </div>
            </section>
            <section>
                <MainPageMiddle />
            </section>
            <section>
                <div className={`${classes['bottom-section']} content-container`}>
                    <InfiniteTiles startingPage={2}/>
                </div>
            </section>
        </>
    );
};

export default MainPage;
