import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';

import Home from './pages/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import GeneralTerms from './pages/GeneralTerms';
import Products from './pages/Products';
import CategoryProducts from './components/Products/CategoryProducts';
import NotFound from './components/small_components/NotFound';

function App() {

    return (
        <div className='main-container'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:categoryName" element={<CategoryProducts />} />

                    {/* Auth */}
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />

                    {/* Info */}
                    <Route path="/general-terms" element={<GeneralTerms />} />
                    {/* Not found */}
                    <Route path='*' element={<NotFound />} />
                    <Route path='/not-found' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
