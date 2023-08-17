import React, { useState } from 'react';

import "../../styles/AuthStyles/sign-up.css"
import Header from '../HomePage/Header';
import { createUserWithEmailAndPassword } from 'firebase/auth';


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
        <div className='sign-up-container'>
            <Header auth={props.auth}/>
            <form action="" onSubmit={signIn}>
                <h1>Create an Account</h1>
                <input 
                    type="email"         
                    placeholder='Enter your email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input 
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;