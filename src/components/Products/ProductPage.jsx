import React, { useEffect, useState } from 'react'

import Header from '../HomePage/Header'
import getUrlData from './data/functions/getUrlData'; 
import fetchData from './data/functions/fetchData';
import "../../styles/ProductsStyles/product-page.css";
import Path from '../small_components/Path';
import ProductImages from './data/components/ProductImages';
import ReviewsContainer from './data/components/ReviewsContainer';
import ColorComponent from './data/components/ColorComponent';
import parseJSON from './data/functions/parseJSON';
import SizesComponent from './data/components/SizesComponent';


const ProductPage = (props) => {
    const currentURL = window.location.href;
    const [category, id] = getUrlData(currentURL);
    const [productData, setProductData] = useState({});
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);
    const [selectedColor, setSelectedColor] = useState("");
    const [availableColors, setavailableColors] = useState([]);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState([""])

    useEffect(() => {
            fetchData(setProductData, setBreadcrumbItems, category, id, productData);
    }, []);

    useEffect(() => {
        if (productData.colors) {
            const clrs = parseJSON(productData.colors);
            const szs = parseJSON(productData.sizes);
            setAvailableSizes(szs.sizes)
            setavailableColors(clrs.colors);
            setSelectedSize(szs.sizes[0]);
            setSelectedColor(clrs.colors[0]);
        }
        
          
        
    }, [productData]);

    return (
        <div className='product-page-container'>
            <Header />
            <div className='path-container'>
                <Path items={breadcrumbItems}/>
            </div>

            
            <div className='product-data-container'>
                <div className='product-images-slider'>
                    <ProductImages category={category} image={productData.productImage}/>
                </div>

                <div className='product-info-container'>
                    <div className='product-name-container'>
                        <h1 className='pp-product-name'>{productData.productName}</h1>
                    </div>
                    
                    <div className='pp-reviews-container'>
                        < ReviewsContainer />
                    </div>

                    <div className='colors-outer-container'>
                        <ColorComponent 
                            colors={availableColors} 
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                        /> 
                    </div>

                    <div className='sizes-outer-container'>
                        <SizesComponent 
                            sizes={availableSizes}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        />
                    </div>

                    <div className='price-container'>
                        {productData.price} лв. / BGN
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ProductPage;
