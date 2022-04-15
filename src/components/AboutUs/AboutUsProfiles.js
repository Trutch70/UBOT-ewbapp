import React from 'react';
import AboutUsSection from './AboutUsSection';
import classes from './AboutUs.module.css';
import Profile from './Profile/Profile';

const AboutUsProfiles = () => {
    return (

        <AboutUsSection className={classes['bg-grey']}>
            <div className={`${classes.left} ${classes.profiles}`}>
                <Profile image={"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                         name={"Diana Kolpenyuk"}
                         instagram={"https://www.instagram.com/dianakllp/"}
                         facebook={"https://www.facebook.com/Trutch.1"}
                />
                <Profile image={"https://images.unsplash.com/photo-1616840420121-7ad8ed885f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                         name={"Anastasiia"}
                         instagram={"https://www.instagram.com/dianakllp/"}
                         facebook={"https://www.facebook.com/Trutch.1"}
                />
                <Profile image={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                         name={"Łukasz Traczyk"}
                         instagram={"https://www.instagram.com/dianakllp/"}
                         facebook={"https://www.facebook.com/Trutch.1"}
                />
                <Profile image={"https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                         name={"Bartek Luzak"}
                         instagram={"https://www.instagram.com/dianakllp/"}
                         facebook={"https://www.facebook.com/Trutch.1"}
                />
            </div>
            <div className={classes.right}>
                <div className={`${classes.header} text-blue`}>
                    A matter of trust
                </div>
                <div className={`${classes.paragraph} ${classes['paragraph-indent-right']}`}>
                    We are well aware that the Internet is full of scammers who use disgusting lies and manipulation. That is why we care about full transparency in building trust. You can find us on social media and the entire code of the website is open. We also do not collect your data. We are just looking for Ukrainian businesses that need help and share their data with you. You can check their truthfulness yourself and decide who you want to help.
                </div>
            </div>
        </AboutUsSection>
    );
};

export default AboutUsProfiles;
