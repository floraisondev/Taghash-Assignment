import React, { Fragment } from 'react';
import Email from "./Email/Email";
import addButton from "../../assets/icons8-plus-50.png";
import "./Emails.css"
const emails = () => {
    return(
        <Fragment>
            <div className = "EmailsContainer">
            <Email>
            Hey guys 👋,
            Wanted to run a few things by you for posting better.
            If you're asking for help, please use the #Help channel. #General is more around general discussions versus debugging. I have to move your posts when you don't.
            If you're asking for random strangers on the internet to help fix your code, please provide the code. We can't help you otherwise. This can be done in the form of a CodePen or even Github Gist. You can also paste a snippet or two into Spectrum. Anything is better than nothing.
        </Email>
 
        <Email>
            Another thing to note. If you post something obscure and you do not clarify yourself after given time, your post will be removed. When I mean "obscure" I'm talking about odd posts I see saying stuff like "how to potato in app".
            Please use codeblocks and please format your code blocks. If can do so here: https://prettier.io/playground/ (I've been formatting everyone's code to clean it up)
        </Email>

        <Email>
            Another thing to note. If you post something obscure and you do not clarify yourself after given time, your post will be removed. When I mean "obscure" I'm talking about odd posts I see saying stuff like "how to potato in app".
            Please use codeblocks and please format your code blocks. If can do so here: https://prettier.io/playground/ (I've been formatting everyone's code to clean it up)
        </Email>

        <div className="addBtn">
       <img className="Add" src={addButton} alt="add-button"></img>
   </div>
          
   </div>

   
    </Fragment>
    );
}

export default emails;