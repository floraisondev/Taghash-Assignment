import React, { Component } from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';

class User extends Component {
    state = {
        name: "Paul Johnson",
        email: "pauljohnson@gmail.com",
        contactNumber:"1234567890"
    }
    render() {
   return(
         <UserInfo name={this.state.name} email ={this.state.email} contact ={this.state.contactNumber}>
        </UserInfo>
         );
    }
}

export default User;