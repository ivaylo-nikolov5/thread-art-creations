import React from "react";
import "../../styles/HomeStyles/footer.css";
import { Tooltip } from "react-tooltip";


function Footer() {
    return (
        <div className="footer-container">
                <div className="info-links">
                    <ul className="links-list">
                        <li className="info-link">General terms</li>
                        <li className="info-link">Privacy policy - GDPR</li>
                        <li className="info-link">FAQ</li>
                        <li className="info-link">About us</li>
                        <li className="info-link">Contacts</li>
                    </ul>
                </div>


                <div className="footer-bottom">
                    <div className="legal-info-container">
                        <h3>Copyright © 2023, Thread Art Creations, All Rights Reserved | Prices in the website are with VAT</h3>
                    </div>


                    <div className="payment-methods">
                        <i 
                            class="fa-brands fa-cc-visa" 
                            data-tooltip-id="visa" 
                            data-tooltip-content="Visa"
                        ></i>
                        <Tooltip id="visa" style={{color: "#66FCF1"}}/>

                        <i 
                            class="fa-brands fa-cc-mastercard"
                            data-tooltip-id="mastercard" 
                            data-tooltip-content="Mastercard"
                        ></i>
                        <Tooltip id="mastercard" style={{color: "#66FCF1"}}/>

                        <i 
                            class="fa-brands fa-cc-paypal"
                            data-tooltip-id="paypal" 
                            data-tooltip-content="Paypal"
                        ></i>
                        <Tooltip id="paypal" style={{color: "#66FCF1"}}/>

                        <i 
                            class="fa-brands fa-cc-stripe"
                            data-tooltip-id="stripe" 
                            data-tooltip-content="Stripe"
                        ></i>
                        <Tooltip id="stripe" style={{color: "#66FCF1"}}/>
                    </div>
                </div>
        </div>
    );
};

export default Footer;