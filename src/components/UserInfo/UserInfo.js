import React from 'react';
import "./UserInfo.css";
import UserAvatar from "../UserAvatar/UserAvatar";


const userInfo = (props) => {
    return (
        <div className="userInfoContainer">
             <UserAvatar />
           <div className="information">
               <div>
                  <h2>{props.name}</h2>
                  <p>{props.email}</p>
               </div>
              
               <div className="contact">
                  ✉ {"  "}{props.contact}
               </div>

           </div>
           
        </div>
    );
}

export default userInfo;