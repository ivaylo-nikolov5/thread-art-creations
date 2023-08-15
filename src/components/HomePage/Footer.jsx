import React from "react";
import "../../styles/HomeStyles/footer.css";
import Tippy from '@tippyjs/react';


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
                        <Tippy content={<span style={{color: "#66FCF1"}}>Visa</span>}>
                            <i class="fa-brands fa-cc-visa" ></i>
                        </Tippy>

                        <Tippy content={<span style={{color: "#66FCF1"}}>Mastercard</span>}>
                            <i class="fa-brands fa-cc-mastercard"></i>
                        </Tippy>

                        <Tippy content={<span style={{color: "#66FCF1"}}>PayPal</span>}>
                            <i class="fa-brands fa-cc-paypal"></i>
                        </Tippy>

                        <Tippy content={<span style={{color: "#66FCF1"}}>Stripe</span>}>
                            <i class="fa-brands fa-cc-stripe"></i>
                        </Tippy>
                    </div>
                </div>
        </div>
    );
};

export default Footer;