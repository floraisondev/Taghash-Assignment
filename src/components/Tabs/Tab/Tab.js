import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Tab.css";
const tab = (props) => {
    return(
        <li className="Tab">
        <NavLink className ="Underline"
        to = {props.link}
        exact = {props.exact}
        activeClassName = "active" >
         {props.children}
        </NavLink>
    </li>
    );
   
}

export default tab;