import React, { Fragment } from 'react';
import  backButton  from "../../assets/icons8-go-back-60.png";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Navigation.css"
const navigation = () => {
 return (
     <Fragment>
        <div className="Wrapper">
        <div><img  className= "Back" src = {backButton} alt="go-back" /></div>
        <div className="UserA"><UserAvatar /></div>
        </div>
    </Fragment>
 );
}

export default navigation;