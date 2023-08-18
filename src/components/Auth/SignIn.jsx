import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "../../styles/AuthStyles/sign-in.css"
import Header from '../HomePage/Header';
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import Footer from '../HomePage/Footer';
import CompanyInfo from '../HomePage/CompanyInfo';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {navigate("/")})
        .catch((error) => {console.log(error)})
        

    };

    return (
        <div className='sign-in-container'>
            <Header/>
            <form action="" onSubmit={signIn} className='log-in-form'>

                <h1 className='log-in-form-title'>Log In</h1>

                <div className='email-container'>
                    <h2 className='inp-field-label'>Email:</h2>
                    <input 
                        className='email-inp'
                        type="email"         
                        placeholder='Enter your email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className='password-container'>
                    <h2 className='inp-field-label'>Password:</h2>
                    <input 
                        className='password-inp'
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button type='submit' className='log-in-btn'>Log In</button>
                <a href="/register" className='sign-up-redirect-link'>Don't have an account?</a>
            </form>

            <div className='footer-container'>
                < CompanyInfo />
                <Footer />
            </div>

        </div>
    );
};

export default SignIn;