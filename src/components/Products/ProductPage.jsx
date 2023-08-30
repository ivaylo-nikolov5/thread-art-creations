import React from 'react'
import Header from '../HomePage/Header'
import getUrlData from './data/getUrlData';
import app from "../../../../server/index";

const ProductPage = (props) => {
    const currentURL = window.location.href;
    const [category, id] = getUrlData(currentURL);

    console.log(category, id);


    return (
        <div>
            <Header />
        </div>
    )
}

export default ProductPage
