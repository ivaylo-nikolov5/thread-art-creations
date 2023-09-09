import React from 'react'
import Header from '../components/HomePage/Header'
import "../styles/AboutStyles/about.css"
import aboutImg from "../assets/images/about-images/about.png"
import AboutCompany from '../components/HomePage/AboutCompany'
import Footer from '../components/HomePage/Footer'
import CompanyInfo from '../components/HomePage/CompanyInfo'

const About = () => {
    return (
        <div className='about-container'>
            <Header />
            
            <div className='about-content-container'>
                <h1 className='about-title'>About Thread Art Creations</h1>
                <p className='about-thanks-p'>Thank you for embarking on a creative journey with Thread Art Creations!</p>
                <p className='about-bulletpoint'>OUR STORY:</p>
                <p className='about-text'>Welcome to Thread Art Creations, where we craft bespoke clothing with customizable prints to elevate your personal style. Since our inception in 2023, we've been dedicated to the artistry of fashion, weaving together quality craftsmanship, innovative design, and the freedom to express yourself.
                    Our global brand is rooted in creativity and fueled by passion. We take pride in offering a distinctive range of apparel that not only meets your needs but also celebrates your unique style.</p>
                
                <p className='about-bulletpoint'>OUR MISSION:</p>
                <p className='about-text'>To provide you with the finest customized clothing options available. Whether you're a fashion enthusiast or just starting to explore your sartorial journey, our creations are tailored to enhance your individuality and exceed your fashion expectations.</p>
            
                <p className='about-bulletpoint'>WE ARE READY TO INSPIRE YOU</p>
                <p className='about-text'>At Thread Art Creations, we don't settle for merely delivering great products; we aspire to inspire you. Our commitment to surprise and delight drives us to surpass ordinary experiences with each purchase, leaving you with a sense of joy and satisfaction.</p>

                <p className='about-bulletpoint'>OUR STORY:</p>
                <p className='about-text' style={{fontWeight: "bold"}}>WHERE CREATIVITY KNOWS NO BOUNDS</p>
                <p className='about-text' style={{fontWeight: "bold"}}>Diversity is the heart of our culture.</p>
                <p className='about-text'>Irrespective of your background, your choices, and your aspirations, Thread Art Creations embraces and celebrates the freedom to express yourself without judgment. We believe in experiencing life on your own terms, where love knows no color, and creativity knows no bounds.</p>

            </div>

            <div className='about-image-container'>
                <img src={aboutImg} alt="" className='about-img' />

                <div className='website-benefits-container'>
                    <div className='benefit'>
                        <i class="fa-solid fa-truck"></i>
                        <p className='benefit-text'>Free shipping on order $79+</p>
                    </div>
                    <div className='benefit'>
                        <i class="fa-solid fa-dollar-sign"></i>
                        <p className='benefit-text'>Get 15% off for your first order</p>
                    </div>
                    <div className='benefit'>
                        <i class="fa-regular fa-star"></i>
                        <p className='benefit-text'>Premium materials</p>
                    </div>
                </div>

            </div>

            <div className='footer-div'>
                <CompanyInfo />
                <Footer />
            </div>
        </div>
    )
}

export default About
