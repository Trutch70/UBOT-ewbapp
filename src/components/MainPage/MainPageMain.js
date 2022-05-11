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
                <div className={classes.support}>
                    <p>
                        The easiest way to support small Ukrainian businesses is to buy their products. You can do this on their online stores or using social media.
                        You can also support them with any amount of money deposited directly into their bank accounts. Thanks to financial aid, owners of businesses affected by the war will be able to pay bills and salaries, cover the production cost or purchase necessary materials.
                        <br/><strong>DISCLAIMER</strong>: International shipping is not available for all stores. You can support some small Ukrainian businesses only through donation.
                    </p>
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
