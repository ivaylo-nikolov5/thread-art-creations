import React from "react";
import "../../styles/HomeStyles/categories.css";
import CategoriesChoice from "./CategoriesChoice";

function Categories() {
    return (
        <div className="categories-container">
            <h3 className="section-title">Categories</h3>
            <hr className="section-separator"/>

            <CategoriesChoice />
        </div>
    )
}

export default Categories;