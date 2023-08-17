import React, { useEffect } from "react";
import "../../styles/header.css"
import logo from "../../assets/images/logo.png";
import HeaderOptionsList from "../small_components/HeaderOptionsList";
import { auth } from "../../firebase";

function Header() {

    return (
        <div className="header-main-container">
            {/* <img src={logo} /> */}
            <div className="header-logo-title-container">
                <a href="/">
                    <h1 className="header-logo-title">Thread Art Creations</h1>
                </a>
            </div>

            <div className="menu-pages-container">
                <HeaderOptionsList />
            </div>

            <div className="auth-and-actions-container">
                {
                    !auth.currentUser ? 
                    <a href="/login">
                        <button className="auth-btn">Login</button>
                    </a>
                    :
                    <a href="/">
                        <button 
                            className="auth-btn"
                            onClick={auth.signOut()}
                        >Log out</button>
                    </a>
                }

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