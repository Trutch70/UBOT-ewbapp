import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = (props) => {
    const onLinkClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Link to={props.to} className={props.className} onClick={onLinkClick}>
            {props.children}
        </Link>
    );
};

export default CustomLink;
