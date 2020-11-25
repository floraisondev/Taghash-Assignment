import React, { Component, Fragment } from 'react';
import "./User.css";
import UserInfo from '../../components/UserInfo/UserInfo';
import Navigation from "../../components/Navigation/Navigation";
import Tabs from "../../components/Tabs/Tabs";
class User extends Component {
    state = {
        name: "Paul Johnson",
        email: "pauljohnson@gmail.com",
        contactNumber:"YCombinator"
    }
    render() {
   return(
       <Fragment>
           <div className="Header">
           <Navigation />
           <UserInfo name={this.state.name} email ={this.state.email} contact ={this.state.contactNumber}>
              </UserInfo>
            </div>
            <Tabs />
        </Fragment>
         );
    }
}

export default User;