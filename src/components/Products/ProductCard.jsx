import React from 'react'
import "../../styles/ProductsStyles/product-card.css";

const ProductCard = (props) => {
    return (
        <a className='product-card-container' href={`http://localhost:3000/products/${props.category}/${props.id}`}>
            <div className='product-card-image-container'>
                <img src={require(`../../assets/images/products-images/categories/${props.category}/${props.img}`)} alt="" className='product-card-image' />
            </div>
            {props.brand.trim() !== "" ? <p className='brand-name'>{props.brand}</p> : <div className='no-brand-line'></div>}
            <h2 className='product-name'>{props.name.length <= 27 ? props.name : props.name.slice(0, 26) + "..."}</h2>
            <p className='price-label'>{props.price}lv.</p>
        </a>
    )
}

export default ProductCard
