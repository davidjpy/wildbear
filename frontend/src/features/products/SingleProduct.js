import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { AiFillHome, AiFillRead } from 'react-icons/ai';
import { MdRateReview } from 'react-icons/md';

import {
    useGetProductsQuery,
    selectProductsById,
    updateCartItem
} from './productsSlice';

import {
    updateNotification
} from '../notification/notificationSlice';

const SingleProduct = () => {

    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery();

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ratingRef = useRef();
    const productDataById = useSelector((state) => selectProductsById(state, id));
    const [count, setCount] = useState(1);
    const [disabledCart, setDisabledCart] = useState(false);

    const productFeatures = useMemo(() => {
        let arrays = [];
        let item = '';

        if (productDataById) {
            const features = productDataById.feature.replace(/[[]?]/g, '').replaceAll(/[�]/g, '™ ');
            for (let i = 0; i < features.length; i++) {
                item += features[i];

                if ((features[i] === `'` || features[i] === `"`) && features[i + 1] === ',') {
                    item = item.replaceAll(`"`, `'`);
                    arrays.push(item.substring(item.indexOf(`'`) + 1, item.lastIndexOf(`'`)));
                    item = '';
                }
            }
            item = item.replaceAll(`"`, `'`);
            arrays.push(item.substring(item.indexOf(`'`) + 1, item.lastIndexOf(`'`)));
        }

        return arrays;
    }, [productDataById]);

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
        if (!(count < 2)) {
            setCount(prev => Number(prev) - 1);
        }
    }

    const handleUpdateCount = (e) => {
        if (!(e.target.value < 1)) {
            setCount(e.target.value);
        } else {
            setCount(1);
        }
    }

    const handleAddToCart = () => {
        dispatch(updateCartItem({ ...productDataById, quantity: count }));
        setDisabledCart(true);
        setTimeout(() => {
            setDisabledCart(false);
        }, 5000);
        setCount(1);
        dispatch(updateNotification({
            message: {
                title: `Action Success`,
                body: `You have added the item #${productDataById.id} ${productDataById.title} x ${count} to your cart`
            },
            position: {
                height: '12%',
                right: '20px'
            }
        }));
    }

    useEffect(() => {
        const handleScroll = () => {
            window.scrollTo({
                top: 0,
                left: 0,
            });
        }
        handleScroll();
    }, []);

    useEffect(() => {
        if (isSuccess) {
            const width = productDataById?.rating * 20;
            ratingRef.current.style.width = `${width}%`
        }
    }, [productDataById, isSuccess]);

    return (
        <>
            {isLoading ? (
                <p>Loading</p >
            ) : (
                <>
                    <div className='singleproduct__nav'>
                        <p className='singleproduct__text singleproduct__text--navbar'>
                            <AiFillHome style={{ verticalAlign: 'top', marginRight: '5px' }} />
                            <span onClick={handleNavigateHome} className='singleproduct__text singleproduct__text--nav'>
                                Home</span> / <span onClick={handleNavigateProduct} className='singleproduct__text singleproduct__text--nav'>Products</span> / <span className='singleproduct__text singleproduct__text--disabled'>{productDataById?.title}
                            </span>
                        </p>
                    </div>
                    <div className='singleproduct'>
                        <div className='singleproduct__info'>
                            <div className='singleproduct__image-wrapper'>
                                <img src={productDataById?.image} alt={productDataById?.title} className='singleproduct__image' />
                            </div>
                            <div className='singleproduct__descriptions'>
                                <div className='singleproduct__title-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--title'><span className='singleproduct__text singleproduct__text--span'>
                                        {productDataById?.brand}</span> | {productDataById?.title.replace(`${productDataById?.brand}`, '')}
                                    </p>
                                    <div className='singleproduct__divider singleproduct__divider--primary' />
                                </div>
                                <div className='singleproduct__rating-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--subtitle'>
                                        <MdRateReview className='singleproduct__icon' />
                                        Rating
                                    </p>
                                    <div className='singleproduct__rating'>
                                        <div className='singleproduct__stars-outer'>
                                            <div ref={ratingRef} className='singleproduct__stars-inner' />
                                        </div>
                                        <p className='singleproduct__text singleproduct__text--rating'>{productDataById?.rating}</p>
                                    </div>
                                    <div className='singleproduct__review'>
                                        <p className='singleproduct__text singleproduct__text--review'>
                                            {Math.round(productDataById?.rating * 7)} {Math.round(productDataById?.rating * 7) < 2 ? 'Review' : 'Reviews'}
                                        </p>
                                        <p className='singleproduct__text singleproduct__text--review'>item #{productDataById?.id}</p>
                                    </div>
                                    <div className='singleproduct__divider singleproduct__divider--secondary' />
                                </div>
                                <div className='singleproduct__body-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--subtitle'>
                                        <AiFillRead className='singleproduct__icon' />
                                        Description
                                    </p>
                                    <p className='singleproduct__text singleproduct__text--body'>{productDataById?.description}</p>
                                    <div className='singleproduct__divider singleproduct__divider--secondary' />
                                </div>
                                <div className='singleproduct__action-wrapper'>
                                    <p className='singleproduct__text singleproduct__text--price'>$ {productDataById?.price}</p>
                                    <div className='singleproduct__input-flexbox'>
                                        <button onClick={handleDecrement} className='singleproduct__button singleproduct__button--decrement'>-</button>
                                        <input className='singleproduct__input' value={count} type='number' onChange={(e) => handleUpdateCount(e)} />
                                        <button onClick={handleIncrement} className='singleproduct__button singleproduct__button--increment'>+</button>
                                    </div>
                                    <button onClick={handleAddToCart} disabled={disabledCart}
                                        className={disabledCart
                                            ? 'singleproduct__button singleproduct__button--flat singleproduct__button--disabled'
                                            : 'singleproduct__button singleproduct__button--flat'}>
                                        ADD TO CART
                                    </button>
                                    <button
                                        className='singleproduct__button singleproduct__button--flat'>ADD TO WISHLIST</button>
                                </div>
                            </div>
                        </div>
                        <div className='singleproduct__feature'>
                            <p className='singleproduct__text singleproduct__text--feature-title'>{productDataById?.title} | Features</p>
                            <ul className='singleproduct__list'>
                                {productFeatures.map((item) => {
                                    return (
                                        <li className='singleproduct__text singleproduct__text--list-item' key={item}>{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default SingleProduct;