import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../HomePage/Header';
import "../../styles/ProductsStyles/category-products.css";
import SortCriteria from './data/SortCriteria';


const CategoryProducts = () => {
    const params = useParams();
    const category = params.categoryName;
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch("http://localhost:8080/categories");
                const data = await response.json();
                setCategories(data); // Save fetched data to state
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            // Check if the category exists in the fetched data
            const categoryExists = categories.some(cat => cat.name === category);

            if (!categoryExists) {
                navigate("/not-found");
            }
        }
    }, [category, categories, navigate]);


    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`http://localhost:8080/${category}-products`);
                const data = await response.json();
                console.log(data);
                setProducts(data); // Save fetched data to state
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);


    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <div className='category-products-container'>
            <Header />
            <div className='category-products-title-container'>
                <h1 className='category-products-title'>
                    {formattedCategory} products
                </h1>
            </div>

            <div className='products-actions-container'>
                <div className='view-selection-container'>
                    <i class="fa-solid fa-grip"></i>
                    <i class="fa-solid fa-list"></i>
                </div>

                <div>
                    <div className='sort-option-container'>
                        <p>Sort by:</p>
                        <SortCriteria />
                    </div>

                    <div className='products-show-quantity-container'>
                        <p>Show: </p>
                        <select name="" id="" className='products-show-quantity'>
                            <option className='quantity-option'>12</option>
                            <option className='quantity-option'>24</option>
                            <option className='quantity-option'>36</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryProducts;
