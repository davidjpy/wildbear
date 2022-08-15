import { useRef } from 'react';

import './ProductPage.css';
import SearchBar from '../features/products/SearchBar';
import LeftMeun from '../features/products/LeftMeun';
import Products from '../features/products/Products';
import { useClickOutside } from '../common/hooks/useClickOutside';

const ProductPage = () => {

    const handleOpenLeftMenu = () => {
        leftMenuRef.current.style.left = '0';
        leftMenuRef.current.style.width = '250px';
        productsRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        productsRef.current.style.pointerEvents = 'none';
        document.body.style.overflow = 'hidden';
    }

    const handleCloseLeftMenu = () => {
        if (window.innerWidth < 1000) {
            leftMenuRef.current.style.left = '-250px';
            leftMenuRef.current.style.width = '0';
            productsRef.current.style.backgroundColor = 'inherit';
            productsRef.current.style.pointerEvents = 'auto';
            document.body.style.overflow = 'auto';
        }
    }

    const productsRef = useRef();
    const leftMenuRef = useClickOutside(handleCloseLeftMenu);


    return (
        <div className='productpage'>
            <LeftMeun leftMenuRef={leftMenuRef} />
            <div className='productpage__container'>
                <SearchBar
                    leftMenuRef={leftMenuRef}
                    productsRef={productsRef}
                    handleOpenLeftMenu={handleOpenLeftMenu}
                    handleCloseLeftMenu={handleCloseLeftMenu}
                />
                <Products productsRef={productsRef} />
            </div>
        </div>
    );
}

export default ProductPage;