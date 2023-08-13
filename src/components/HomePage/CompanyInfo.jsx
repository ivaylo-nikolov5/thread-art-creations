import React from "react";
import "../../styles/HomeStyles/company-info.css";
import ListItem from "../small_components/ListItem";

function CompanyInfo() {
    return (
        <div className="company-info-container">
            <div className="company-socials">
                {/* <img src="logo" alt="" /> */}
                <h2 className="text-logo">Thread Art Creations</h2>
                <h2 className="company-name">Thread Art Creations Services</h2>

                <div className="socials-container">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                </div>
                
            </div>

            <div className="company-services">
                <h2 className="section-title">Services</h2>
                <ul className="services-list">
                    <ListItem text="Custom Design"/>
                    <ListItem text="DTG Print"/>
                    <ListItem text="DTF Prints"/>
                    <ListItem text="Wholesale Orders"/>
                </ul>
            </div>


            <div className="my-account">
            <h2 className="section-title">My Account</h2>
                <ul className="my-acc-list">
                    <li className="my-acc-list-item">Orders history</li>
                    <li className="my-acc-list-item">Cancel order</li>
                    <li className="my-acc-list-item">Way-bills manager</li>
                    <li className="my-acc-list-item">Design studio</li>
                </ul>
            </div>


            <div className="newsletter-section">
                <h2 className="section-title">Newsletter</h2>
                <p className="newsletter-text">
                    Sign up for our newsletter and learn 
                    everything new about the platform, 
                    how it works and much more
                </p>

                <div className="newsletter-subscription-container">
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className="newsletter-email-field" 
                        placeholder="Enter email"    
                    />
                    <button className="newsletter-subscribe-btn">Subscribe</button>
                </div>

            </div>
        </div>
    );
};

export default CompanyInfo;