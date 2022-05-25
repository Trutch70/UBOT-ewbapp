import React from 'react';
import classes from './Profile.module.css';
import SocialMediaIcon from './SocialMediaIcon';

const Profile = ({
    author
}) => {
    return (
        <div data-query={"profile"} className={classes.profile}>
            <div className={classes['img-container']}>
                <img src={author.image} alt={"team member"}/>
            </div>
            <div className={classes.content}>
                <SocialMediaIcon type={author.icons[0].type} link={author.icons[0].link}/>
                <SocialMediaIcon type={author.icons[1].type} link={author.icons[1].link} right={true}/>
                <div className={classes.name}>
                    My name is {author.name}.
                </div>
                <div className={classes.description}>
                    {author.description}
                </div>
            </div>
        </div>
    );
};

export default Profile;
