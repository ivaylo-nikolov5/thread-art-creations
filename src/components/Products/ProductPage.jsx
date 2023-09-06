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
import QuantityComponent from './data/components/QuantityComponent';
import ProductDescription from './data/components/ProductDescription';
import SizesTable from './data/components/SizesTable';


const ProductPage = (props) => {
    const currentURL = window.location.href;
    const [category, id] = getUrlData(currentURL);
    const [productData, setProductData] = useState({});
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);
    const [selectedColor, setSelectedColor] = useState("");
    const [availableColors, setavailableColors] = useState([]);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState([""])
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [widths, setWidths] = useState([]);
    const [heights, setHeights] = useState([]);

    useEffect(() => {
            fetchData(setProductData, setBreadcrumbItems, category, id, productData);
    }, []);

    useEffect(() => {
        if (productData.colors) {
            const clrs = parseJSON(productData.colors);
            const szs = parseJSON(productData.sizes);
            const wdts = parseJSON(productData.widths);
            const hgts = parseJSON(productData.heights);
            setAvailableSizes(szs.sizes)
            setavailableColors(clrs.colors);
            setSelectedSize(szs.sizes[0]);
            setSelectedColor(clrs.colors[0]);
            setWidths(wdts.widths)
            setHeights(hgts.heights)
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

                    <div className='quantity-outer-container'>
                        <p className='selected-color'>Quantity</p>
                        <QuantityComponent 
                            availableQuantity={productData.productsCount}
                            selectedQuantity={selectedQuantity}
                            setSelectedQuantity={setSelectedQuantity}
                        />
                    </div>

                    <div className='price-container'>
                        {productData.price} лв. / BGN
                    </div>

                    <div className='purchase-container'>
                        <div className='purchase-buttons'>
                            <button
                                className='purchase-btn'
                                onClick={() => {}}
                            >ADD TO CART
                            </button>
                            <button
                                className='purchase-btn'
                                onClick={() => {}}
                            >BUY IT NOW
                            </button>
                        </div>

                        <div className='product-secondary-btns'>
                            <button className='add-to-favorite-btn'>
                                <i class="fa-solid fa-heart"></i>
                                Add to Favorites
                            </button>

                            <button className='add-for-comparison-bnt'>
                                <i class="fa-solid fa-right-left"></i>
                                Add for comparison
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product-description-container'>
                < ProductDescription description={productData.productDescription}/>
                < SizesTable 
                    sizes={availableSizes}
                    widths={widths}    
                    heights={heights}    
                />
            </div>
            
        </div>
    );
}

export default ProductPage;
