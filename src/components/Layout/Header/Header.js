import React, { useEffect, useRef } from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import hamburger from '../../../assets/hamburger.svg';
import logo from '../../../assets/logo.jpeg';

const Header = () => {
    const navContainerRef = useRef();

    const toggleOpenMenu = (event) => {
        const container = event.target.closest(`.${classes["navigation-container"]}`);

        container.classList.toggle(classes.open);
    };

    const onLinkClick = () => {
        navContainerRef.current.classList.remove(classes.open);
        window.scrollTo(0, 0);
    }


    useEffect(() => {
        const detectClickOutsideHeader = (event) => {
            if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
                navContainerRef.current.classList.remove(classes.open);
            }
        }
        document.addEventListener("mousedown", detectClickOutsideHeader);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", detectClickOutsideHeader);
        };
    }, [navContainerRef]);

    return (
        <header className={classes.navbar}>
            <div className={classes.container}>
                <div ref={navContainerRef} className={classes["navigation-container"]}>
                    <NavLink to={"/"} onClick={onLinkClick}>
                        <div className={classes.logo}>
                            <img src={logo} alt={"ukraine back on track"}/>
                        </div>
                    </NavLink>
                    <div className={classes["mobile-nav-toggle"]} onClick={toggleOpenMenu}>
                        <img src={hamburger} alt={"hamburger menu"}/>
                    </div>
                    <div className={classes.navigation}>
                        <ul>
                            <li>
                                <NavLink to={"/"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`} onClick={onLinkClick}>
                                    Ukraine: back on track
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about-us"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`} onClick={onLinkClick}>
                                    About the project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"} className={({isActive}) => `${isActive ? classes.active : ''} text-blue`} onClick={onLinkClick}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
