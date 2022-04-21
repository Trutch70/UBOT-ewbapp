import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.css';
import Tiles from './Tiles/Tiles';
import useReceiversProvider from '../../hooks/UseReceiversProvider';
import ContentContainer from '../Common/ContentContainer';
import Steps from './Steps';

const MainPageMain = () => {
    const [receivers, setReceivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const receiversProvider = useReceiversProvider();

    useEffect(() => {
        receiversProvider.fetchReceivers()
            .then(data => {
                setReceivers(data);
                setLoading(false);
            })
    }, [receiversProvider]);
    return (
        <section className={`${classes['main-section']}`}>
            <ContentContainer>
                <div className={`${classes['sub-header']} text-blue`}>
                    How can you provide the support?
                </div>
                <Steps />
                <div className={`${classes['sub-header']} text-yellow`}>
                    Despite the war, they still operate in Ukraine:
                </div>
                <Tiles receivers={receivers} loading={loading} loadingTilesAmount={4} />
            </ContentContainer>
        </section>
    );
};

export default MainPageMain;
