import React from 'react';
import Profile from './Profile';
import classes from './Profile.module.css';

const AboutUsProfileTiles = (
    {
        authors
    }
) => {
    return (
        <div className={classes.tiles}>
            {
                authors.map(author => {
                    return <Profile  key={author.name} author={author} />
                })
            }
        </div>
    );
};

export default AboutUsProfileTiles;
