import { useRef } from 'react';

import './ProductPage.css';
import SearchBar from '../features/products/SearchBar';
import LeftMeun from '../features/products/LeftMeun';
import Products from '../features/products/Products';

const ProductPage = () => {

    const leftMenuRef = useRef();

    return (
        <div className='productpage'>
            <LeftMeun leftMenuRef={leftMenuRef} />
            <div className='productpage__container'>
                <SearchBar leftMenuRef={leftMenuRef} />
                <Products />
            </div>
        </div>
    );
}

export default ProductPage;