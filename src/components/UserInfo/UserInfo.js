import React, { Fragment } from 'react';
import classes from "./UserInfo.css";
import UserAvatar from "../UserAvatar/UserAvatar";

const userInfo = (props) => {
    return (
        <Fragment>
           <UserAvatar />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <div>
                
                <p>{props.contact}</p>
            </div>
        </Fragment>
    );
}

export default userInfo;