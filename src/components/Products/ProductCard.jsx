import React from 'react'
import "../../styles/ProductsStyles/product-card.css";

const ProductCard = (props) => {
    return (
        <div className='product-card-container'>
            <div className='product-card-image-container'>
                <img src={require(`../../assets/images/products-images/categories/${props.category}/${props.img}`)} alt="" className='product-card-image' />
            </div>
            <p className='brand-name'>{props.brand}</p>
            <h2 className='product-name'>{props.name.length <= 27 ? props.name : props.name.slice(0, 26) + "..."}</h2>
            <p className='price-label'>{props.price}lv.</p>
        </div>
    )
}

export default ProductCard
