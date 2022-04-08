import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.navbar}>
            <div className={classes.container}>
                <ul>
                    <li>
                        <NavLink to={"/"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`}>
                            Ukraine: back on track
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about-us"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`}>
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className={classes.logo} style={{height: '57px', width: '204px'}}>

                </div>
            </div>
        </header>
    );
};

export default Header;
