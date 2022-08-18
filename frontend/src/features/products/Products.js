import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetProductsQuery, selectAllProducts, selectProductByCategory } from './productsSlice';

const Products = ({ productsRef }) => {

    const { pagenum, category } = useParams();

    return (
        <ProductsExcerpt
            productsRef={productsRef}
            category={category}
            pagenum={pagenum}
        />
    );
}

const ProductsExcerpt = ({ productsRef, category, pagenum }) => {

    // const productDataByCategory = useSelector(state => selectProductByCategory(state, category));
    // console.log(productDataByCategory);
    const [test, setTest] = useState(false);

    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery();

    const productData = useSelector(selectAllProducts);

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

    const pageProducts = useMemo(() => {
        let pageItems = [];

        const PageItems = productQuery.reduce((accu, curr) => {
            pageItems.push(curr);
            if (pageItems.length === 48) {
                accu.push(pageItems);
                pageItems = [];
            }

            if (pageItems.length === productQuery.length % 48
                && accu.length === Math.floor(productQuery.length / 48)) {
                accu.push(pageItems);
            }

            return accu;
        }, []);

        return PageItems;
    }, [productQuery]);

    return (
        <div ref={productsRef} className='products'>
            <div className='products__header-wrapper'>
                <h1 className='products__header'>{category === 'all' ? 'All Categories' : category.replaceAll('-', ' ')} <span className='products__header products__header--secondary'>({productQuery.length} products available)</span></h1>
                <div className='products__divider' />
            </div>
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
        </div>
    );
}

export default Products;