import React from 'react';
import classes from './Tile.module.css';
import MainButton from '../Common/MainButton';

const Tile = ({
    title,
    description,
    onButtonClick,
    loading = false,
}) => {
    return (
        <div className={`${classes.tile} ${loading? classes.loading : ''}`}>
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
                        !loading && <div className={classes['button-container']}>
                            <MainButton type={"button"} text={"Support now"} onClick={onButtonClick} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Tile;
