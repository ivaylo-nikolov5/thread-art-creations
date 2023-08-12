import React from "react";
import "../../styles/header.css"
import logo from "../../assets/images/logo.png";
import HeaderOptionsList from "../small_components/HeaderOptionsList";

function Header() {
    return (
        <div className="header-main-container">
            {/* <img src={logo} /> */}
            <div className="header-logo-title-container">
                <h1 className="header-logo-title">Thread Art Creations</h1>
            </div>

            <div className="menu-pages-container">
                <HeaderOptionsList />
            </div>

            <div className="auth-and-actions-container">
                <button className="auth-btn">Login</button>

                <button className="profile-btn">
                    <i class="fa-solid fa-user"></i>
                </button>

                <button className="cart-btn">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>

                <button className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    )
}

export default Header;