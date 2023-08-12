import React from "react";

import "../styles/HomeStyles/home.css";
import Header from "../components/HomePage/Header";
import HomeImageSlider from "../components/HomePage/HomeImageSlider";
import AboutCompany from "../components/HomePage/AboutCompany";
import Categories from "../components/HomePage/Categories";

function Home() {
    return (
        <div>
            <Header />

            <HomeImageSlider /> 

            <AboutCompany />

            <Categories />
            
        </div>
    )
}

export default Home;