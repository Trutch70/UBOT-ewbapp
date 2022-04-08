import React from 'react';
import classes from './Tile.module.css';
import MainButton from '../../Common/MainButton';

const Tile = ({
    title,
    description,
    onButtonClick,
    loading = false,
    background = null,
    displayButton = true
}) => {
    let style = {
    };

    if (background) {
        style = {
            background: `url(${background})` ?? null,
            backgroundSize: 'cover',
        };
    }

    return (
        <div className={`${classes.tile} ${loading? classes.loading : ''}`} style={style}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        {title}
                    </div>
                    <div className={classes['paragraph-container']}>
                        <p>
                            {description}
                        </p>
                    </div>
                    {
                        displayButton && !loading && <div className={classes['button-container']}>
                            <MainButton type={"button"} text={"Support now"} onClick={onButtonClick} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Tile;
