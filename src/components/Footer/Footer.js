import React from "react";
import "./Footer.css"
import copyright from "../../assets/icons8-copyright-24.png";
const footer = () => {
    return(
        <div className="Footer">
            <div className="Footer-text">
                <img src={copyright} alt="copyright"/>
                <p>taghash.io</p>
            </div>
        </div>
    )
}

export default footer;