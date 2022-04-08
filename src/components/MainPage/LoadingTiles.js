import React from 'react';
import Tile from './Tile';

const LoadingTiles = ({amount}) => {
    const tiles = [];

    for (let i = 0; i < amount; i ++) {
        tiles.push(<Tile key={`loading_tile_${i}`} loading={true}/>)
    }

    return tiles;
};

export default LoadingTiles;
