import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {
    useGetProductsQuery,
    selectAllProducts,
    selectPaginationRange,
    updatePaginationRange
} from './productsSlice';

const Products = ({ productsRef, location, search }) => {

    return (
        <ProductsExcerpt
            productsRef={productsRef}
            location={location}
            search={search}
        />
    );
}

const ProductsExcerpt = ({ productsRef, location, search }) => {

    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pagenum, category } = useParams();
    const productData = useSelector(selectAllProducts);
    const paginationRange = useSelector(selectPaginationRange);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }

    const shuffleArray = (array) => {
        const dupArray = array.slice();

        for (let i = dupArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [dupArray[i], dupArray[j]] = [dupArray[j], dupArray[i]];
        }

        return dupArray;
    }

    const productQuery = useMemo(() =>
        category === 'all' ? shuffleArray(productData) : productData.filter(item => item.category === category)
        , [productData, category]);

    const handleFilterProducts = productQuery.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    const pageProducts = useMemo(() => {
        let pageItems = [];

        const PageItems = handleFilterProducts.reduce((accu, curr) => {
            pageItems.push(curr);
            if (pageItems.length === 48) {
                accu.push(pageItems);
                pageItems = [];
            }

            if (pageItems.length === handleFilterProducts.length % 48
                && accu.length === Math.floor(handleFilterProducts.length / 48)) {
                accu.push(pageItems);
            }

            return accu;
        }, []);

        return PageItems;
    }, [handleFilterProducts]);

    const paginations = useMemo(() => [...Array(pageProducts.length).keys()], [pageProducts]);

    const handlePagination = (page) => {
        if (page > 0 && page - 1 < pageProducts.length) {
            navigate(`/products/${category}/page=${page}`);
        }
    }

    useEffect(() => {
        dispatch(updatePaginationRange({ pageNum: Number(pagenum), dataLength: pageProducts.length }));
        handleScroll();
    }, [location, pagenum, pageProducts, dispatch]);

    return (
        <div ref={productsRef} className='products'>
            <div className='products__header-wrapper'>
                <h1 className='products__header'>{category === 'all' ? 'All Categories' : category.replaceAll('-', ' ')} <span className='products__header products__header--secondary'>({handleFilterProducts.length} products available)</span></h1>
                <div className='products__divider' />
            </div>
            {pageProducts.length !== 0 ? (
                <>
                    <div className='products__grid'>
                        {pageProducts[pagenum - 1]?.map((item) => {
                            return (
                                <div key={item.id} className='products__card'>
                                    <div>
                                        <img src={item.image} alt={item.title} loading='lazy' className='products__image' />
                                    </div>
                                    <div className='products__descriptions'>
                                        <p className='products__text products__text--primary'>{item.brand}</p>
                                        <p className='products__text products__text--secondary'>{item.title.replace(`${item.brand}`, '')}</p>
                                        <p className='products__text products__text--body'>$ {item.price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='products__pagination'>
                        <button onClick={() => handlePagination(Number(pagenum) - 1)} className='products__button'>{'<<'}</button>
                        {Number(pagenum) > (paginationRange[1] - paginationRange[0] - 1)
                            && <button onClick={() => handlePagination(1)} className='products__button'>1</button>}
                        {Number(pagenum) > (paginationRange[1] - paginationRange[0])
                            && <button className='products__button products__button--sign'>...</button>}
                        {paginations.slice(paginationRange[0], paginationRange[1]).map((item) => {
                            return (
                                <button onClick={() => handlePagination(item + 1)} key={item}
                                    className={item + 1 === Number(pagenum) ? 'products__button products__button--active' : 'products__button'}>
                                    {item + 1}
                                </button>
                            );
                        })}
                        {Number(pagenum) < pageProducts.length - (paginationRange[1] - paginationRange[0] - 1)
                            && <button className='products__button products__button--sign'>...</button>}
                        {Number(pagenum) < pageProducts.length - (paginationRange[1] - paginationRange[0] - 2)
                            && <button onClick={() => handlePagination(pageProducts.length)} className='products__button'>{pageProducts.length}</button>}
                        <button onClick={() => handlePagination(Number(pagenum) + 1)} className='products__button'>{'>>'}</button>
                    </div>
                </>
            ) : (
                <p>
                    No Products Found
                </p>
            )}
        </div>
    );
}

export default Products;