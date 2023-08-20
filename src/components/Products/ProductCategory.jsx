import React from 'react';
import "../../styles/ProductsStyles/products-category.css";

const ProductCategory = (props) => {
    return (
        <a href={props.url}>
            <div className='product-category-container'>
                <div className='product-category-img-container'>
                    <img src={props.img} alt="" className='product-category-img'/>
                </div>
                <label className='category-label'>{props.label}</label>
            </div>
        </a>
    )
}

export default ProductCategory;