import React from "react";
import "../../styles/HomeStyles/sign-up-div.css";

function SignUpDiv() {
    return (
        <div className="sign-up-main-container">
            <div className="sign-up-div-container">
                <p className="sign-up-div-p">SIGN UP for FREE NOW</p>
                <p className="sign-up-div-p">and order your CUSTOM DESIGN</p>
                <p className="sign-up-div-p">or choose between 100+ designs</p>
                <button className="sign-up-btn">SIGN UP</button>
            </div>

            <div className="bottom-line"></div>
        </div>
        
    );
};

export default SignUpDiv;