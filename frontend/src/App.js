import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Layout = lazy(() => import('./common/layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListPage = lazy(() => import('./pages/ProductListPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const SuccessPage = lazy(() => import('./pages/SuccessPage'));
const MissingPage = lazy(() => import('./pages/MissingPage'));

/* const Layout = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return  import('./common/layout/Layout');
});
const HomePage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/HomePage');
});
const ProductListPage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/ProductListPage');
});
const ProductPage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/ProductPage');
});
const AboutPage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/AboutPage');
});
const ContactPage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/ContactPage');
});
const CartPage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/CartPage');
});
const SuccessPage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/SuccessPage');
});
const MissingPage = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    return import('./pages/MissingPage');
}); */

function App() {
    return (
        <Suspense fallback={<div className='loading-screen'><div className='spinner'><div></div><div></div><div></div><div></div></div></div>}>
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
                    <Route path='cart' element={<CartPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='contact' element={<ContactPage />} />
                    <Route path='success' element={<SuccessPage />} />
                    <Route path='*' element={<MissingPage />} />
                </Route>
            </Routes>
       </Suspense>
    );
}

export default App;