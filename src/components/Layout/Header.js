import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.navbar}>
            <div className={classes.container}>
                <ul>
                    <li>
                        <a className={classes.active} href={"#"}>Ukraine: back on track</a>
                    </li>
                    <li>
                        <a href={"#"}>About us</a>
                    </li>
                    <li>
                        <a href={"#"}>Contact</a>
                    </li>
                </ul>
                <div className={classes.logo} style={{height: '57px', width: '204px'}}>

                </div>
            </div>
        </header>
    );
};

export default Header;
