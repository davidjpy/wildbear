import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    selectNewProductsData,
    useGetProductsQuery
} from './productsSlice';

const NewProducts = () => {

    const { isLoading } = useGetProductsQuery();
    const newProducts = useSelector(selectNewProductsData);

    return (
        <section className='newproducts'>
            <div className='newproducts__divider'>
                <h3>New Products</h3>
                <div className='newproducts__underline' />
            </div>
            {isLoading ? ('Loading') : (
                <>
                    <div className='newproducts__cards'>
                        {newProducts.slice(0, 3).map((item) => {
                            return (
                                <Product key={item.id} item={item} />
                            );
                        })}
                    </div>
                    <div className='newproducts__cards'>
                        {newProducts.slice(3).map((item) => {
                            return (
                                <Product key={item.id} item={item} />
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
}

const Product = ({ item }) => {

    const navigate = useNavigate();
    
    const handleNavigateSingleProduct = (id) => {
        navigate(`product-details/item=${id}`);
    }

    return (
        <div onClick={() => handleNavigateSingleProduct(item.id)} className='newproducts__card'>
            <img src={item.image} alt={item.title} className='newproducts__image' loading='lazy' />
            <p className='newproducts__pricetag'>{item.title.replace(`${item.brand}`, '')}</p>
        </div>
    );
}

export default NewProducts;