import React, { useState } from "react";
import "../../styles/HomeStyles/home-image-slider.css"; // Make sure to adjust the path to your CSS file
import ReactSwipe from 'react-swipe';

import image1 from "../../assets/images/home-slider-images/1.png";
import image2 from "../../assets/images/home-slider-images/2.png";

function HomeImageSlider() {
    const [idx, setIdx] = useState(0);
    const [dots, setDots] = useState([image1, image2]);
    let reactSwipeEl;

    const Dots = () => {
        const innerDots = dots.map((dot, index) => {
            return (
                <div key={index} className="outerDot">
                    <div className="innerDot" style={{backgroundColor: idx === index ? "#45A29E" : "#fff"}}></div>
                </div>
            )
        })

        return (
            <div className="dotsContainer">
                {innerDots}
            </div>
        )
    };

    return (
        <div className="slider">
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={el => (reactSwipeEl = el)}
            >
               <div className="slider-image">
                    <img src={image1} alt="" className="slider-image"/>
                    <button className="slider-button">LEARN MORE</button>
               </div>
               <div className="slider-image">
                    <img src={image2} alt="" className="slider-image"/>
               </div>
            </ReactSwipe>
            <button 
                onClick={() => {
                    reactSwipeEl.prev()
                    setIdx(prev => prev - 1 !== -1 ? prev - 1 : prev)
                }} 
                className="arrow-prev"
            >
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button 
                onClick={() => {
                    reactSwipeEl.next()
                    setIdx(prev => prev + 1 !== dots.length ? prev + 1 : prev)
                }}
                className="arrow-next"
            >
                <i class="fa-solid fa-arrow-right"></i>
            </button>

            <Dots />

        </div>
    );
}


export default HomeImageSlider;
