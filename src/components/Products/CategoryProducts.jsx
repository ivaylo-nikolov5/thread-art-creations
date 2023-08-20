import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../HomePage/Header';
import "../../styles/ProductsStyles/category-products.css";
import categories from './data/categories';

const CategoryProducts = (props) => {
    const params = useParams();
    const category = params.categoryName;
    const navigate = useNavigate(); 

    const categoriesNames = Object.keys(categories);

    useEffect(() => {
        if (!categoriesNames.includes(category)) {
            navigate("/not-found");
        }
    }, []); 

    return (
        <div>
            <Header />
            <div className='category-priducts-title-container'>
                <h1 className='category-products-title'>
                    {category[0].toLocaleUpperCase()}{category.slice(1)} products
                </h1>
            </div>
        </div>
    );
}

export default CategoryProducts;
