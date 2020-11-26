import React from 'react';
import  "./UserAvatar.css";
import avatar from "../../assets/icons8-user-60 (1).png";
const userAvatar = () => {
    return (
        <div>
            <img className = "Avatar" src={avatar} alt ="User-avatar"/>
        </div>
        
    );
}

export default userAvatar;