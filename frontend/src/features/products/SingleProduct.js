import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { AiFillHome, AiFillRead } from 'react-icons/ai';
import { MdRateReview } from 'react-icons/md';

import { useGetProductsQuery, selectProductsById } from './productsSlice';

const SingleProduct = () => {

    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery();

    const { id } = useParams();
    const navigate = useNavigate();
    const ratingRef = useRef();
    const productDataById = useSelector((state) => selectProductsById(state, id));
    const [count, setCount] = useState(1);

    console.log(id, productDataById)

    useEffect(() => {
        const handleScroll = () => {
            window.scrollTo({
                top: 0,
                left: 0,
            });
        }

        handleScroll();
    }, []);

    const handleNavigateHome = () => {
        navigate('/');
    }

    const handleNavigateProduct = () => {
        navigate(-1);
    }

    const handleIncrement = () => {
        setCount(prev => Number(prev) + 1);
    }

    const handleDecrement = () => {
        if (count !== 0) {
            setCount(prev => prev - 1);
        }
    }

    const handleUpdateCount = (e) => {
        console.log(e.target.value)
        if (!e.target.value < 1) {
            setCount(e.target.value);
        } else {
            setCount(1);
        }
    }

    useEffect(() => {
        if (isSuccess) {
            const width = productDataById?.rating * 20;
            ratingRef.current.style.width = `${width}%`
        }
    }, [productDataById, isSuccess]);

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <>
            {isLoading ? (
                <p>Loading</p >
            ) : (
                <>
                    <div className='singleproduct__nav'>
                        <p className='singleproduct__text singleproduct__text--navbar'>
                            <AiFillHome style={{ verticalAlign: 'top', marginRight: '5px' }} />
                            <span onClick={handleNavigateHome} className='singleproduct__text singleproduct__text--nav'>Home</span> / <span onClick={handleNavigateProduct} className='singleproduct__text singleproduct__text--nav'>Products</span> / <span className='singleproduct__text singleproduct__text--disabled'>{productDataById?.title}</span>
                        </p>
                    </div>
                    <div className='singleproduct'>
                        <div className='singleproduct__info'>
                            <div className='singleproduct__image-wrapper'>
                                <img src={productDataById?.image} alt={productDataById?.title} className='singleproduct__image' />
                            </div>
                            <div className='singleproduct__descriptions'>
                                <div className='singleproduct__title-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--title'><span className='singleproduct__text singleproduct__text--span'>{productDataById?.brand}</span> | {productDataById?.title.replace(`${productDataById?.brand}`, '')}</p>
                                    <div className='singleproduct__divider singleproduct__divider--primary' />
                                </div>
                                <div className='singleproduct__rating-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--subtitle'>
                                        <MdRateReview size={27} className='singleproduct__icon' />
                                        Rating
                                    </p>
                                    <div className='singleproduct__rating'>
                                        <div className='singleproduct__stars-outer'>
                                            <div ref={ratingRef} className='singleproduct__stars-inner' />
                                        </div>
                                        <p className='singleproduct__text singleproduct__text--rating'>{productDataById?.rating}</p>
                                    </div>
                                    <div className='singleproduct__review'>
                                        <p className='singleproduct__text singleproduct__text--review'>{Math.round(productDataById?.rating * 7)} Reviews</p>
                                        <p className='singleproduct__text singleproduct__text--review'>item #{productDataById?.id}</p>
                                    </div>
                                    <div className='singleproduct__divider singleproduct__divider--secondary' />
                                </div>
                                <div className='singleproduct__body-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--subtitle'>
                                        <AiFillRead size={28} className='singleproduct__icon' />
                                        Description
                                    </p>
                                    <p className='singleproduct__text singleproduct__text--body'>{productDataById?.description}</p>
                                    <div className='singleproduct__divider singleproduct__divider--secondary' />
                                </div>
                                <div className='singleproduct__action-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--price'>$ {productDataById?.price}</p>
                                    <div className='singleproduct__flexbox'>
                                        <button onClick={handleDecrement} className='singleproduct__button singleproduct__button--decrement'>-</button>
                                        <input className='singleproduct__input' min='0' value={count} type='number' onChange={(e) => handleUpdateCount(e)} />
                                        <button onClick={handleIncrement} className='singleproduct__button singleproduct__button--increment'>+</button>
                                    </div>
                                    <button className='singleproduct__button singleproduct__button--long'>ADD TO CART</button>
                                    <button className='singleproduct__button singleproduct__button--long'>ADD TO WISHLIST</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default SingleProduct;