import React, { Fragment } from 'react';
import "./Email.css"
const email = (props) => {
    return(
        <Fragment>
            <div className="emailContainer">
                <span className="emailTag">Emails</span>
                <p>{props.children}</p>
            </div>
        </Fragment>
    );
}

export default email;