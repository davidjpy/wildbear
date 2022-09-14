import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

import './ProductListPage.css';
import SearchBar from '../features/products/SearchBar';
import LeftMeun from '../features/products/LeftMeun';
import Products from '../features/products/Products';
import { useClickOutside } from '../common/hooks/useClickOutside';
import { resetPaginationRange } from '../features/products/productsSlice';

const ProductListPage = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const { category } = useParams();
    const [searchParams, setSearchParams] = useSearchParams({ search: '' });

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }

    useEffect(() => {
        dispatch(resetPaginationRange());
        handleScroll();
    }, [category, dispatch]);

    const handleOpenLeftMenu = () => {
        leftMenuRef.current.style.left = '0';
        leftMenuRef.current.style.width = '250px';
        productsRef.current.style.pointerEvents = 'none';

        if (window.innerWidth < 1000) {
            productsRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            document.body.style.overflow = 'hidden';
        }
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

    const closeMenuRef = useRef();
    const productsRef = useRef();
    const wrapperRef = useRef();
    const leftMenuRef = useClickOutside(handleCloseLeftMenu, closeMenuRef);

    useEffect(() => {
        function hideLeftmenu () {
            wrapperRef.current.style.height = `${window.innerHeight - 80}px`;

            if (window.innerWidth < 1000) {
                handleCloseLeftMenu();
            } else {
                handleOpenLeftMenu();
                productsRef.current.style.backgroundColor = 'inherit';
            }
        }
        window.addEventListener('resize', hideLeftmenu);

        return () => {
            window.removeEventListener('resize', hideLeftmenu);
        }
    });

    return (
        <div className='productlistpage'>
            <LeftMeun 
                leftMenuRef={leftMenuRef} 
                location={location}
                wrapperRef={wrapperRef}
            />
            <div className='productlistpage__container'>
                <SearchBar
                    leftMenuRef={leftMenuRef}
                    handleOpenLeftMenu={handleOpenLeftMenu}
                    handleCloseLeftMenu={handleCloseLeftMenu}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    closeMenuRef={closeMenuRef}
                />
                <Products 
                    productsRef={productsRef}
                    location={location}
                    searchParams={searchParams}
                />
            </div>
        </div>
    );
}

export default ProductListPage;