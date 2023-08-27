import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../HomePage/Header';
import "../../styles/ProductsStyles/category-products.css";
import SortCriteria from './data/SortCriteria';
import ProductCard from './ProductCard';
import ColumnProductCard from './ColumnProductCard';
import CompanyInfo from "../HomePage/CompanyInfo";
import Footer from "../HomePage/Footer";


const CategoryProducts = () => {
    const params = useParams();
    const category = params.categoryName;
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [view, setView] = useState("grid");

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

    const productItems = products.map((data) => {
        return view === "grid" ? 
        <ProductCard 
            img={data.productImage} 
            brand={data.brandName} 
            name={data.productName}
            price={data.price}
            description={data.productDescription}
            category={category}
        />
        :
        <ColumnProductCard 
            img={data.productImage} 
            brand={data.brandName} 
            name={data.productName}
            price={data.price}
            description={data.productDescription}
            category={category}
        />
    })

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
                    <i class="fa-solid fa-grip" onClick={ () => setView("grid") }></i>
                    <i class="fa-solid fa-list" onClick={ () => setView("column") }></i>
                </div>

                <div className='sorting-options-container'>
                    <div className='sort-option-container'>
                        <p className='option-label'>Sort by:</p>
                        <SortCriteria />
                    </div>

                    <div className='products-show-quantity-container'>
                        <p className='option-label'>Show: </p>
                        <select name="" id="" className='products-show-quantity'>
                            <option className='quantity-option'>12</option>
                            <option className='quantity-option'>24</option>
                            <option className='quantity-option'>36</option>
                        </select>
                    </div>
                </div>
            </div>

            {view === "grid" ? 
                <div className='products-container'>
                    {productItems}
                </div>
                :
                <div className='column-products-container'>
                    {productItems}
                </div>
            }

            <div className='footer-container'>
                < CompanyInfo />
                <Footer />
            </div>
        </div>
    );
}

export default CategoryProducts;
