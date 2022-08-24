import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./common/layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListPage = lazy(() => import('./pages/ProductListPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const HotSalesPage = lazy(() => import('./pages/HotSalesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='products' element={<ProductListPage />}>
                        <Route path=':category' element={<ProductListPage />}>
                            <Route path='page=:pagenum' element={<ProductListPage />} />
                        </Route>
                    </Route>
                    <Route path='product-details' element={<ProductPage />}>
                        <Route path='item=:id' element={<ProductPage />} />
                    </Route>
                    <Route path='hotsales' element={<HotSalesPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;