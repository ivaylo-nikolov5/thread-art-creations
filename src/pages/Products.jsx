import React from 'react';

import Header from '../components/HomePage/Header';
import "../styles/ProductsStyles/products.css";
import QuoteDiv from '../components/Products/QuoteDiv';
import images from '../components/funcs/categoriesImages';
import categoriesLabels from "../components/Products/data/categoriesLabels";

import ProductCategory from '../components/Products/ProductCategory';
import CompanyInfo from '../components/HomePage/CompanyInfo';
import Footer from '../components/HomePage/Footer';

const Products = () => {
    const categories = images.map((img, idx) => {
        return <ProductCategory key={idx} img={img} label={categoriesLabels[idx]}/>
    })


    return (
        <div className='products-page-container'>
            <Header />

            <QuoteDiv />

            <h1 className='categories-title'>Categories</h1>

            <div className='products-categories-container'>
                <div className='products-categories-inner-container'>
                    {categories}
                </div>
            </div>

            <div className='popular-products-container'>
                <h2 className='categories-title'>Popular products now</h2>
            </div>

            <div className='footer-div'>
                <CompanyInfo />
                <Footer />
            </div>
        </div>
    );
};

export default Products;