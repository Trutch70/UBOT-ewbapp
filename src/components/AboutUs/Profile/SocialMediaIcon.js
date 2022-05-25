import React from 'react';
import classes from './Profile.module.css';
import instagram from '../../../assets/instagram-icon.svg';
import facebook from '../../../assets/facebook-icon.svg';
import github from '../../../assets/github-icon.svg';
import behance from '../../../assets/behance-icon.svg';

const SocialMediaIcon = (
    {
        type,
        link,
        right = false
    }
) => {
    let imgSource = facebook;

    switch (type) {
        case 'instagram':
            imgSource = instagram;
            break;
        case 'github':
            imgSource = github;
            break;
        case 'behance':
            imgSource = behance;
            break;
        default:
            break;
    }

    return (
        <a href={link} target={"_blank"} rel={"noreferrer"} className={`${classes.icon} ${right ? classes.right : ''}`}>
            <img src={imgSource} alt={"social media"} />
        </a>
    );
};

export default SocialMediaIcon;
