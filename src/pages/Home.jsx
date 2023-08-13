import React from "react";

import "../styles/HomeStyles/home.css";
import Header from "../components/HomePage/Header";
import HomeImageSlider from "../components/HomePage/HomeImageSlider";
import AboutCompany from "../components/HomePage/AboutCompany";
import Categories from "../components/HomePage/Categories";
import SignUpDiv from "../components/HomePage/SignUpDiv";
import CompanyInfo from "../components/HomePage/CompanyInfo";

function Home() {
    return (
        <div>
            <Header />

            <HomeImageSlider /> 

            <AboutCompany />

            <Categories />

            <SignUpDiv />

            <CompanyInfo />
            
        </div>
    )
}

export default Home;