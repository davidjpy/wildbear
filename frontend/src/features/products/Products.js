import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetProductsQuery, selectAllProducts  } from './productsSlice';

const Products = () => {

    const { category } = useParams();

    return (
        <div className='products'>
            <ProductsExcerpt 
                category={category}
            />
        </div>
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

    const cards = [...Array(25).keys()];

    return (
        <>
            {cards.map((item) => {
                    return (
                        <div key={item} className='products__card'>
                            {item}
                        </div>
                    );
                })
            }
        </>
    );
}

export default Products;