import React from 'react';
import classes from './ReceiverTile.module.css';
import MainButton from '../../Common/MainButton';
import SecondaryButton from '../../Common/SecondaryButton';
import CustomLink from '../../Common/CustomLink';

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
            <CustomLink to={href ?? '/'}>
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
            </CustomLink>
        </div>
    );
};

export default ReceiverTile;
