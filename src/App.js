import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';

import Home from './pages/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

function App() {
    const [authStateLoaded, setAuthStateLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
        setAuthStateLoaded(true);
        });

        return () => unsubscribe();
    }, []);

    if (!authStateLoaded) {
        // Show a loading indicator while checking authentication state
        return <div>Loading...</div>;
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />

                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
