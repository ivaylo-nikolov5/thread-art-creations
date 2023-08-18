import React from 'react';
import quoteDivImage from "../../assets/images/products-images/products.png"

import "../../styles/ProductsStyles/quote-div.css";

const QuoteDiv = () => {
    return (
        <div className='quote-div-container'>
            <div className='quote-div-inner-container'>
                <div className='quote-div-img-container'>
                    <img src={quoteDivImage} alt="" className='quote-div-img'/>
                </div>

                <div className='quote-div-text-container'>
                    <h1 className='quote-div-text-title'> 
                        <span className='upper-quotes'>“</span> In our catalog you will find 100+ items
                    </h1>
                    <p className='quote-div-text-p'>Customize them with your designs and be unique </p>
                    <div className='try-now-btn-container'>
                        <a href="/"><button className='try-now-btn'>Try now</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteDiv