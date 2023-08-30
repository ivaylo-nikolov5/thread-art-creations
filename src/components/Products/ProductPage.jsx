import React, { useEffect, useState } from 'react'
import Header from '../HomePage/Header'
import getUrlData from './data/getUrlData'; 
import fetchProductData from "./data/fetchProductData";

const ProductPage = (props) => {
    const currentURL = window.location.href;
    const [category, id] = getUrlData(currentURL);
    const [productData, setProductData] = useState({})

    useEffect(() => {
        fetchProductData(category, id)
    })




    return (
        <div>
            <Header />
        </div>
    )
}

export default ProductPage
