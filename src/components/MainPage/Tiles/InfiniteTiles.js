import React from 'react';
import Tiles from './Tiles';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import ReceiversProvider from '../../../app/ReceiversProvider';

const InfiniteTiles = ({startingPage = 1, instantInit = false}) => {
    const offset = Math.round(window.innerHeight / 2);

    const {
        scrollElementRef: tilesRef,
        data: receivers,
        loading
    } = useInfiniteScroll(ReceiversProvider.fetchReceivers, 8, startingPage, offset, instantInit);

    return <Tiles ref={tilesRef} receivers={receivers} loading={loading} loadingTilesAmount={4}/>;
};

export default InfiniteTiles;
