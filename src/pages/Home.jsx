import React from "react";

import "../styles/HomeStyles/home.css";
import Header from "../components/HomePage/Header";
import HomeImageSlider from "../components/HomePage/HomeImageSlider";
import AboutCompany from "../components/HomePage/AboutCompany";
import Categories from "../components/HomePage/Categories";
import SignUpDiv from "../components/HomePage/SignUpDiv";
import CompanyInfo from "../components/HomePage/CompanyInfo";
import Footer from "../components/HomePage/Footer";

function Home() {

    return (
        <div>
            <Header user={user}/>

            <HomeImageSlider /> 

            <AboutCompany />

            <Categories />

            {!user && <SignUpDiv />}

            <CompanyInfo />

            <Footer />
            
        </div>
    )
}

export default Home;