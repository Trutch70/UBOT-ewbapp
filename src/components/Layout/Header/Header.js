import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import hamburger from '../../../assets/hamburger.svg';

const Header = () => {
    const toggleOpenMenu = (event) => {
        const container = event.target.closest(`.${classes["navigation-container"]}`);

        container.classList.toggle(classes.open);
    };

    return (
        <header className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes["navigation-container"]}>
                    <div className={classes["mobile-nav-toggle"]} onClick={toggleOpenMenu}>
                        <img src={hamburger} alt={"hamburger menu"}/>
                    </div>
                    <div className={classes['navigation']}>
                        <ul>
                            <li>
                                <NavLink to={"/"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`}>
                                    Ukraine: back on track
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about-us"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`}>
                                    About the project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/businesses"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`}>
                                    Explore businesses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.logo}>

                </div>
            </div>
        </header>
    );
};

export default Header;
