import React from 'react';
import classes from './ReceiverTile.module.css';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';
import SecondaryButton from '../SecondaryButton';

const ReceiverTile = ({
    title,
    description,
    onButtonClick,
    href,
    loading = false,
    background = null,
}) => {
    let style = {};

    let button = <MainButton type={"button"} text={"Support now"} onClick={onButtonClick} />

    if (background) {
        style = {
            backgroundImage: `url(${background})`
        };

        button = <SecondaryButton type={"button"} text={"Support now"} onClick={onButtonClick} />;
    }

    return (
        <div className={`${classes.tile} ${background ? classes.dark : ''} ${loading? classes.loading : ''}`} style={style}>
            <Link to={href ?? '/'}>
                <div className={classes.content}>
                    <div>
                        <div className={classes.header}>
                            {title}
                        </div>
                    </div>
                    <div className={classes['paragraph-container']}>
                        <p>
                            {description}
                        </p>
                    </div>
                    {
                        !loading &&
                        <div className={classes['button-container']}>
                            {button}
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
};

export default ReceiverTile;
