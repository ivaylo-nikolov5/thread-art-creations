import React from "react";
import images from "../funcs/categoriesImages";
import "../../styles/HomeStyles/categories.css";

function CategoriesChoice() {
   

    return (
        <div className="categories-slider">
            <div className="category-container">
                <img src={images[0]} className="category-img" alt="" />
                <label>Мъже</label>
            </div>
            <div className="category-container">
                <img src={images[1]} className="category-img" alt="" />
                <label>Жени</label>
            </div>
            <div className="category-container">
                <img src={images[2]} className="category-img" alt="" />
                <label>Деца</label>
            </div>
            <div className="category-container">
                <img src={images[3]} className="category-img" alt="" />
                <label>Аксесоари</label>
            </div>
        </div>
    );
}

export default CategoriesChoice;