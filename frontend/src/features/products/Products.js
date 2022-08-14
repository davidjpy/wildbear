import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetProductsQuery, selectAllProducts } from './productsSlice';

const Products = () => {

    const { category } = useParams();

    return (
        <ProductsExcerpt
            category={category}
        />
    );
}

const ProductsExcerpt = ({ category }) => {

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

    console.log(productQuery)

    return (
        <div className='products'>
            <div className='products__header-wrapper'>
                <h1 className='products__header'>{category === 'all' ? 'All Categories' : category.replaceAll('-', ' ')} <span className='products__header products__header--secondary'>({productQuery.length} products available)</span></h1>
                <div className='products__divider' />
            </div>
            <div className='products__grid'>
                {productQuery.slice(0, 40).map((item) => {
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
                })
                }
            </div>
        </div>
    );
}

export default Products;