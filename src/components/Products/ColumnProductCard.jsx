import React from 'react'
import "../../styles/ProductsStyles/column-product-card.css";

const ColumnProductCard = (props) => {
    return (
        <div className='column-product-card-container'>
            <div className='col-product-image'>
                <img src={require(`../../assets/images/products-images/categories/${props.category}/${props.img}`)} alt="" className='col-product-card-image' />
            </div>

            <div className='col-product-data-container'>
                <div className='manifacturer-container'>
                    {props.brand.trim() !== "" ? 
                        <p className='manifacturer'>Manifacturer: <a href="">{props.brand}</a></p>
                        : 
                        <div></div>
                    }
                </div>

                <div className='product-info'>
                    <a href="" className='product-link'><h1 className='col-product-name'>{props.name}</h1></a>
                    <p className='product-description'>
                        {props.description.length <= 258 ? props.description : props.description.slice(0, 259) + "..."}
                    </p>
                    <p className='product-price'>{props.price}lv.</p>
                </div>

                <div className='product-actions-container'>
                    <button className='buy-btn'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        Buy
                    </button>
                    <button className='favorite-btn'>
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ColumnProductCard
