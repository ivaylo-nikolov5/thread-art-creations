import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../HomePage/Header';
import "../../styles/ProductsStyles/category-products.css";

const CategoryProducts = () => {
    const params = useParams();
    const category = params.categoryName;
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

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
            console.log("Categories array:", categories);
            console.log("Category:", category);

            // Check if the category exists in the fetched data
            const categoryExists = categories.some(cat => cat.name === category);

            console.log("Category exists:", categoryExists);

            if (!categoryExists) {
                navigate("/not-found");
            }
        }
    }, [category, categories, navigate]);

    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <div>
            <Header />
            <div className='category-products-title-container'>
                <h1 className='category-products-title'>
                    {formattedCategory} products
                </h1>
            </div>
        </div>
    );
}

export default CategoryProducts;
