import React from 'react';

import Header from '../components/HomePage/Header';
import Categories from '../components/HomePage/Categories';
import "../styles/ProductsStyles/products.css";
import QuoteDiv from '../components/Products/QuoteDiv';

const Products = () => {
    return (
        <div>
            <Header />

            <QuoteDiv />

            <div className='products-categories-container'>
            </div>
        </div>
    );
};

export default Products;