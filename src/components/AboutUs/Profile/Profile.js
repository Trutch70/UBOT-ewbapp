import React from 'react';
import classes from './Profile.module.css';
import facebookLogo from '../../../assets/facebook-108-432507.png';
import instaLogo from '../../../assets/Instagram_logo_2016.svg';

const Profile = ({
    name,
    image,
    instagram,
    facebook,
}) => {
    return (
        <div className={classes.profile}>
            <img src={image} alt={"team member"}/>
            <div className={`${classes.name} text-blue`}>
                {name}
            </div>
            <div className={classes.social}>
                <a className={classes.instagram} href={instagram} target={"_blank"} rel={"noreferrer"}>
                    <img src={instaLogo} alt={"instagram"}/>
                </a>
                <a className={classes.facebook} href={facebook} target={"_blank"} rel={"noreferrer"}>
                    <img src={facebookLogo} alt={"facebook"}/>
                </a>
            </div>
        </div>
    );
};

export default Profile;
