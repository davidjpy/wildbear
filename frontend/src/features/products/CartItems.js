import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    selectCartItem, 
    updateCartItem,
    removeCartItem
} from './productsSlice';
import { updateNotification } from '../notification/notificationSlice';

const CartItems = () => {

    const currentCartItem = useSelector(selectCartItem);

    return (
        <div className='cartitem'>
            <div className='cartitem__promotion'>
                <p className='cartitem__header'>Limited Time Promotional Offer</p>
                <p className='cartitem__body cartitem__body--gray'>16 Days Left For <span className='cartitem__body cartitem__body--hightlight'>Free Shipping</span> - Make Your Moves Now</p>
            </div>
            <div className='cartitem__items'>
                <div className='cartitem__items-header-wrapper'>
                    <p className='cartitem__header cartitem__header--white' style={{ width: '80%' }}>Cart Item</p>
                    <p className='cartitem__header cartitem__header--test' style={{ width: '20%', textAlign: 'center' }}>Subtotal</p>
                </div>
                {currentCartItem.map((item) => {
                    return (
                        <SingleItem key={item.id} item={item} />
                    );
                })}
            </div>
        </div>
    );
}

const SingleItem = ({ item }) => {

    const [count, setCount] = useState(item.quantity);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        setCount(prev => Number(prev) + 1);
        const updateItem = { ...item, quantity: 1 }
        dispatch(updateCartItem(updateItem));
    }

    const handleDecrement = () => {
        if (!(count < 2)) {
            setCount(prev => Number(prev) - 1);
            const updateItem = { ...item, quantity: -1 }
            dispatch(updateCartItem(updateItem));
        }
    }

    const handleUpdateCount = (e) => {
        if (!(e.target.value < 1)) {
            setCount(e.target.value);
            const updateItem = { ...item, quantity: e.target.value - item.quantity }
            dispatch(updateCartItem(updateItem));
        } else {
            setCount(1);
            const updateItem = { ...item, quantity: 1 - item.quantity }
            dispatch(updateCartItem(updateItem));
        }
    }

    const handleRemoveItem = (item) => {
        dispatch(removeCartItem(item.id));
        dispatch(updateNotification({
            message: {
                title: `Action Success`,
                body: `You have removed the item #${item.id} ${item.title} from your cart`
            },
            position: {
                height: '12%',
                right: '20px'
            }
        }));
    }

    return (
        <>
            <div key={item.id} className='cartitem__item'>
                <div className='cartitem__image-wrapper'>
                    <img src={item.image} alt={item.title} className='cartitem__image' />
                </div>
                <div className='cartitem__description'>
                    <p className='cartitem__header cartitem__header--black'><span className='cartitem__header'>{item.brand}</span> | {item.title.replace(`${item.brand}`, '')}</p>
                    <div className='cartitem__divider cartitem__divider--primary' />
                    <p className='cartitem__body cartitem__body--gray'>{item.description.substring(0, 120) + ' ......'}</p>
                    <div className='cartitem__figure--wrapper'>
                        <p className='cartitem__body cartitem__body--gray' style={{ flex: 1 }}>Price: <span className='cartitem__body cartitem__body--hightlight'>${item.price}</span></p>
                        <p className='cartitem__body cartitem__body--gray'>Quantity: </p>
                        <div className='cartitem__input-flexbox'>
                            <button onClick={handleDecrement} className='cartitem__button cartitem__button--decrement'>-</button>
                            <input value={count} onChange={(e) => handleUpdateCount(e)} className='cartitem__input' type='number' />
                            <button onClick={handleIncrement} className='cartitem__button cartitem__button--increment'>+</button>
                        </div>
                    </div>
                    <div className='cartitem__action-wrapper'>
                        <p onClick={() => handleRemoveItem(item)} className='cartitem__body cartitem__body--action'>Remove Item</p>
                    </div>
                </div>
                <div className='cartitem__price'>
                    <p className='cartitem__body cartitem__body--heavy-highlight'>${Math.round(item.price * item.quantity * 100) / 100}</p>
                </div>
            </div>
            <div className='cartitem__divider cartitem__divider--secondary' />
        </>
    );
}

export default CartItems;