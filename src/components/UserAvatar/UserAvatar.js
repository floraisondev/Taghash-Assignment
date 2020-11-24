import React, { Fragment } from 'react';
import classes from "./UserInfo.css";
import avatar from '../../assets/undraw_female_avatar_w3jk (1).png';

const userAvatar = () => {
    return (
        <img src={avatar} alt ="User-avatar"/>
    );
}

export default userAvatar;