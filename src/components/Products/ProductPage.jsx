import React, { useEffect, useState } from 'react'
import Header from '../HomePage/Header'
import getUrlData from './data/getUrlData'; 
import fetchData from './data/fetchData';
import "../../styles/ProductsStyles/product-page.css";
import Path from '../small_components/Path';


const ProductPage = (props) => {
    const currentURL = window.location.href;
    const [category, id] = getUrlData(currentURL);
    const [productData, setProductData] = useState({});
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    useEffect(() => {
        fetchData(setProductData, setBreadcrumbItems, category, id);
    }, []);

    return (
        <div className='product-page-container'>
            <Header />
            <div className='path-container'>
                <Path items={breadcrumbItems}/>
            </div>
        </div>
    );
}

export default ProductPage;
