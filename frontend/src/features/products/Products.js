import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetProductsQuery, selectAllProducts } from './productsSlice';

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

    const [test, setTest] = useState(false);

    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery();

    const productData = useSelector(selectAllProducts);
    let productQuery;

    if (category === 'all') {
        productQuery = productData;
    } else {
        productQuery = productData.filter(item => item.category === category);
    }

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

    console.log(test)

    const logger = () => {
        setTest(!test)
    }

    return (
        <div ref={productsRef} className='products'>
            <button onClick={logger}>logger</button>
            <p>{String(test)}</p>
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