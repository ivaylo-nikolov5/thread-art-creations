import React from "react";
import images from "../funcs/categoriesImages";
import "../../styles/HomeStyles/categories.css";

function CategoriesChoice() {
   

    return (
        <div className="categories-slider">
            <div>
                <div className="category-container">
                    <img src={images[0]} className="category-img" alt="" />
                    <div className="category-label-container">
                        <label className="category-label">Men</label>
                    </div>
                    
                </div>
                
                <div className="link-container">
                    <p className="items-link">See the items</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>

            <div>
                <div className="category-container">
                    <img src={images[1]} className="category-img" alt="" />
                    <div className="category-label-container">
                        <label className="category-label">Women</label>
                    </div>
                    
                </div>

                <div className="link-container">
                    <p className="items-link">See the items</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>

            <div>
                <div className="category-container">
                    <img src={images[2]} className="category-img" alt="" />
                    <div className="category-label-container">
                        <label className="category-label">Kids</label>
                    </div>
                    
                </div>

                <div className="link-container">
                    <p className="items-link">See the items</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>

            <div>
                <div className="category-container">
                    <img src={images[3]} className="category-img" alt="" />
                    <div className="category-label-container">
                        <label className="category-label">Accessories</label>
                    </div>
                    
                </div>

                <div className="link-container">
                    <p className="items-link">See the items</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>
        </div>
    );
}

export default CategoriesChoice;