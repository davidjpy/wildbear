import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './common/layout/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import HotSalesPage from './pages/HotSalesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ProductPage />} />
                <Route path='hotsales' element={<HotSalesPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Route>
        </Routes>
    );
}

export default App;