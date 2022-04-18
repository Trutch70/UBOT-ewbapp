import React from 'react';
import ReceiverTile from './ReceiverTile';

const LoadingTiles = ({amount}) => {
    const tiles = [];

    for (let i = 0; i < amount; i ++) {
        tiles.push(<ReceiverTile key={`loading_tile_${i}`} loading={true}/>)
    }

    return tiles;
};

export default LoadingTiles;
