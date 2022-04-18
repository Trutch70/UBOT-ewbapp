import React from 'react';
import classes from './ReceiverTile.module.css';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';
import SecondaryButton from '../SecondaryButton';

const ReceiverTile = ({
    title,
    description,
    onButtonClick,
    buttonHref,
    loading = false,
    background = null,
}) => {
    let style = {};

    let button = <MainButton type={"button"} text={"Support now"} onClick={onButtonClick} />

    if (background) {
        style = {
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
            backgroundSize: 'cover',
        };

        button = <SecondaryButton type={"button"} text={"Support now"} onClick={onButtonClick} />;
    }

    return (
        <div className={`${classes.tile} ${background? classes.dark : ''} ${loading? classes.loading : ''}`} style={style}>
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
                        <Link to={buttonHref}>
                            {button}
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ReceiverTile;
