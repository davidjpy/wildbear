import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    FaCreditCard,
    FaCcMastercard,
    FaCcVisa,
    FaCcPaypal,
    FaCcJcb,
    FaCcApplePay,
    FaCcAmazonPay,
    FaCcAmex
} from 'react-icons/fa';

import { removeCartItem } from './productsSlice';

const CartSummary = ({ currentCartItem }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [card, setCard] = useState('');
    const [date, setDate] = useState('');
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleCardChange = (e) => {
        if (e.target.value.length <= 16) {
            setCard(e.target.value);
        }
    }

    const handleDateChange = (e) => {
        if (e.target.value.length <= 6) {
            setDate(e.target.value);
        }
    }

    const handleCodeChange = (e) => {
        if (e.target.value.length <= 3) {
            setCode(e.target.value);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleStreetChange = (e) => {
        setStreet(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const handleSubmitData = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            dispatch(removeCartItem());
            navigate('/success')
        }, 2000);
    }

    const validInput = Boolean(card && date && code && email && phone && street && city && country && !isLoading && currentCartItem.length !== 0);

    const subtotal = currentCartItem.reduce((accu, curr) => {
        accu += curr.price * curr.quantity
        return (Math.round(accu * 100) / 100);
    }, 0);

    const shippingCharge = Math.round(subtotal * 0.05 * 100) / 100;

    const salesTax = Math.round(subtotal * 0.03 * 100) / 100;

    return (
        <div className='cartsummary'>
            <div className='cartsummary__summary'>
                <p className='cartsummary__header'>Summary</p>
                <div className='cartsummary__divider cartsummary__divider--primary' />
                <div className='cartsummary__subtotal-wrapper'>
                    <p className='cartsummary__body'>Subtotal ({currentCartItem.length} items)</p>
                    <p className='cartsummary__body'>${subtotal}</p>
                </div>
                <div className='cartsummary__subtotal-wrapper'>
                    <p className='cartsummary__body'>Shipping Charge</p>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        {shippingCharge === 0 ?
                            (
                                <p className='cartsummary__body'>${shippingCharge}</p>
                            ) : (
                                <>
                                    <span className='cartsummary__body cartsummary__body--active'>$0</span>
                                    <p className='cartsummary__body cartsummary__body--disable'>${shippingCharge}</p>
                                </>
                            )}
                    </div>
                </div>
                <div className='cartsummary__subtotal-wrapper'>
                    <p className='cartsummary__body'>Sales Tax</p>
                    <p className='cartsummary__body'>${salesTax}</p>
                </div>
                <div className='cartsummary__divider cartsummary__divider--secondary' />
                <div className='cartsummary__subtotal-wrapper'>
                    <p className='cartsummary__body'>Estimated Total</p>
                    <p className='cartsummary__body'>${Math.round((subtotal + salesTax) * 100) / 100}</p>
                </div>
            </div>
            <div className='cartsummary__payment'>
                <p className='cartsummary__header'>Payment & Shipping</p>
                <div className='cartsummary__divider cartsummary__divider--primary' />
                <div className='cartsummary__input-wrapper'>
                    <input placeholder=' ' type='number' value={card} onChange={(e) => handleCardChange(e)} className='cartsummary__input cartsummary__input--custom-placeholder' />
                    <span className='cartsummary__placeholder-icon'><FaCreditCard /> Card Number</span>
                </div>
                <div className='cartsummary__input-wrapper'>
                    <input placeholder='Expiration Date (MM/YYYY)' type='number' value={date} onChange={(e) => handleDateChange(e)} className='cartsummary__input cartsummary__input--long' />
                    <input placeholder='CVC/CVV' type='password' value={code} onChange={(e) => handleCodeChange(e)} className='cartsummary__input cartsummary__input--short' />
                </div>
                <div className='cartsummary__icon-wrapper'>
                    <FaCcMastercard className='cartsummary__icon' />
                    <FaCcVisa className='cartsummary__icon' />
                    <FaCcPaypal className='cartsummary__icon' />
                    <FaCcJcb className='cartsummary__icon' />
                    <FaCcApplePay className='cartsummary__icon' />
                    <FaCcAmazonPay className='cartsummary__icon' />
                    <FaCcAmex className='cartsummary__icon' />
                </div>
                <div className='cartsummary__divider cartsummary__divider--secondary' />
                <form>
                    <input placeholder='Email' type='text' value={email} onChange={(e) => handleEmailChange(e)} className='cartsummary__input' />
                    <input placeholder='Phone' type='number' value={phone} onChange={(e) => handlePhoneChange(e)} className='cartsummary__input' />
                    <input placeholder='Street Address' type='text' value={street} onChange={(e) => handleStreetChange(e)} className='cartsummary__input' />
                    <div className='cartsummary__input-wrapper'>
                        <input placeholder='City' type='text' value={city} onChange={(e) => handleCityChange(e)} className='cartsummary__input cartsummary__input--long' />
                        <input placeholder='Country' type='text' value={country} onChange={(e) => handleCountryChange(e)} className='cartsummary__input cartsummary__input--short' />
                    </div>
                </form>
                <button onClick={handleSubmitData} disabled={!validInput} className='cartsummary__button'>
                    {isLoading ? (<div className='cartsummary__spinner'><div></div><div></div><div></div><div></div></div>) : 'Checkout'}
                </button>
            </div>
        </div>
    );
}

export default CartSummary;