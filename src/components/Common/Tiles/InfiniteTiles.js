import React from 'react';
import useReceiversProvider from '../../../hooks/UseReceiversProvider';
import Tiles from './Tiles';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

const InfiniteTiles = ({
   startingPage = 1,
   instantInit = false,
   filters = null
}) => {
    const receiversProvider = useReceiversProvider();
    const offset = Math.round(window.innerHeight / 2);

    const {
        scrollElementRef: tilesRef,
        data: receivers,
        loading
    } = useInfiniteScroll(receiversProvider.fetchReceivers, 8, startingPage, offset, instantInit, filters);

    return <Tiles ref={tilesRef} receivers={receivers} loading={loading} loadingTilesAmount={4}/>;
};

export default InfiniteTiles;
