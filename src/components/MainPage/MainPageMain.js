import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.css';
import Tiles from './Tiles/Tiles';
import { fetchReceivers } from '../../services/ReceiversProvider';
import ContentContainer from '../Common/ContentContainer';

const MainPageMain = () => {
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
        <section className={`${classes['main-section']}`}>
            <ContentContainer>
                <div className={`${classes['sub-header']} text-yellow`}>
                    Meet those who continue to operate in Ukraine:
                </div>
                <Tiles receivers={receivers} loading={loading} loadingTilesAmount={4} />
            </ContentContainer>
        </section>
    );
};

export default MainPageMain;
