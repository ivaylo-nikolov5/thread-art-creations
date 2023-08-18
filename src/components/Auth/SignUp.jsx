import React, { useState } from 'react';

import "../../styles/AuthStyles/sign-up.css"
import "../../styles/AuthStyles/sign-in.css"
import Header from '../HomePage/Header';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import CompanyInfo from '../HomePage/CompanyInfo';
import Footer from '../HomePage/Footer';


const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(props.auth, email, password)
        .then((userCredentials) => {console.log(userCredentials)})
        .catch((error) => {console.log(error)})
    };

    return (
        <div className='sign-in-container'>
            <Header />
            <form action="" onSubmit={signIn} className='log-in-form'>
                <h1 className='sign-up-form-title'>Create an Account</h1>
                
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

                <div className='password-container'>
                    <h2 className='inp-field-label'>Repeat password:</h2>
                    <input 
                        className='password-inp'
                        type="password"
                        placeholder='Repeat your password'
                        // value={password}
                        // onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div className='checkbox-container'>
                    <input type="checkbox" name='general-terms'/>
                    <label htmlFor="general-terms">
                        Accept the  
                        <a href="/general-terms" className='general-terms-link'>
                            General terms
                        </a>?</label>
                </div>

                <div className='checkbox-container'>
                    <input type="checkbox" name='newsletter'/>
                    <label htmlFor="newsletter">Subscribe to newsletter?</label>
                </div>


                <button type='submit' className='log-in-btn'>Sign Up</button>
                <a href="/login" className='sign-up-redirect-link'>Already have an account?</a>
            </form>

            <div className='footer-container'>
                <CompanyInfo />
                <Footer />
            </div>
        </div>
    );
};

export default SignUp;