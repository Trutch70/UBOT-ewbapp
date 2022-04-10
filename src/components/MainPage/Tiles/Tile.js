import React from 'react';
import classes from './Tile.module.css';
import MainButton from '../../Common/MainButton';
import { Link } from 'react-router-dom';

const Tile = ({
    title,
    description,
    onButtonClick,
    loading = false,
    background = null,
    displayButton = true,
    buttonHref = null,
    bgMode = null,
}) => {
    let style, bgStyle = {
    };

    if (background) {
        style = {
            background: `url(${background})` ?? null,
            backgroundSize: 'cover',
        };
    }

    if (bgMode) {
        switch (bgMode) {
            case 'dark':
                bgStyle = {
                    background: 'rgba(0, 0, 0, 0.4)',
                };
                if (style) {
                    style.color = 'white';
                }
                break;
            case 'light':
                bgStyle = {
                    background: 'rgba(255, 255, 255, 0.5)'
                }
                break;
            default:
                bgStyle = {

                };
                break;
        }
    }

    let button = <MainButton type={"button"} text={"Support now"} onClick={onButtonClick} />;

    if (buttonHref) {
        button = (
            <Link to={buttonHref}>
                <MainButton type={"button"} text={"Support now"} onClick={onButtonClick} />
            </Link>
        );
    }

    return (
        <div className={`${classes.tile} ${loading? classes.loading : ''}`} style={style}>
            <div className={classes.wrapper} style={bgStyle}>
                <div className={classes.content}>
                    <div className={classes.clamp}>
                        <div className={classes.header}>
                            {title}
                        </div>
                        <div className={classes['paragraph-container']}>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                    {
                        displayButton && !loading &&
                        <div className={classes['button-container']}>
                            {button}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Tile;
