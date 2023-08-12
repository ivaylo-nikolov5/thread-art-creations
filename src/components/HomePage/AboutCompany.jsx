import React from "react";

import "../../styles/HomeStyles/about-company.css"

function AboutCompany() {
    return (
        <div className="about-company-container">

            <div className="about-company-div">
                <i class="fa-solid fa-shirt"></i>
                <h2 className="about-company-div-title">Create a product of your own design </h2>
                <div className="description-container">
                    <p className="about-company-div-description">
                        Choose from 100+ items
                        T-shirts, blouses, sweatshirts, 
                        mugs, paintings, posters, 
                        badges and much more
                    </p>
                </div>
            </div>


            <div className="about-company-div">
                <i class="fa-solid fa-boxes-stacked"></i>
                <h2 className="about-company-div-title">Wide Choice</h2>
                <div className="description-container">
                    <p className="about-company-div-description">
                        Find wide choice designs
                        created by our experts or 
                        by other people
                    </p>
                </div>
            </div>


            <div className="about-company-div">
                <i class="fa-solid fa-money-bill-1-wave"></i>
                <h2 className="about-company-div-title">Affordable prices</h2>
                <div className="description-container">
                    <p className="about-company-div-description">
                        Our prices are accessable
                        to everyone with high quality
                        of the materials
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutCompany;