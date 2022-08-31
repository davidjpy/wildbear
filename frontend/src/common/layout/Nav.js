import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { GiBearHead } from 'react-icons/gi';

import {
    selectCartItem,
    updateCartItem
} from '../../features/products/productsSlice';

import {
    selectNotification,
    updateNotification
} from '../../features/notification/notificationSlice';

const Nav = () => {

    const index = [
        { tab: 'HOME', nav: '/' },
        { tab: 'PRODUCTS', nav: `/products/all/page=1/` },
        { tab: 'ABOUT', nav: '/about/' },
        { tab: 'CONTACT', nav: '/contact/' }
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const notificationRef = useRef();
    const path = location.pathname.slice(0, location.pathname.indexOf('/', 1));
    const currentCartItem = useSelector(selectCartItem);
    const notification = useSelector(selectNotification);

    const handleNavigateCart = () => {
        navigate('cart');
    }

    useEffect(() => {
        const item = localStorage.getItem('cartItem');
        if (item !== null) {
            dispatch(updateCartItem(JSON.parse(item)));
        }
    }, [dispatch]);

    useEffect(() => {
        if (currentCartItem.length > 0) {
            localStorage.setItem('cartItem', JSON.stringify(currentCartItem));
        } else {
            localStorage.removeItem('cartItem');
        }
    }, [currentCartItem]);

    let modal = (
        <div ref={notificationRef} className='nav__notification'>
            <h5 className='nav__text nav__text--notification-title'>{notification.message.title}</h5>
            <p className='nav__text nav__text--notification--body'>{notification.message.body}</p>
        </div>
    );

    useEffect(() => {
        if (notification.message.title) {
            notificationRef.current.style.top = notification.position.height;
            notificationRef.current.style.right = notification.position.right;
            notificationRef.current.style.opacity = '1';
            notificationRef.current.style.visibility = 'visible';
            setTimeout(() => {
                dispatch(updateNotification({
                    message: {
                        title: '',
                        body: ''
                    },
                    position: {
                        height: '',
                        right: ''
                    }
                }));
            }, 5000);
        } else {
            notificationRef.current.style.opacity = '0';
            notificationRef.current.style.top = '0';
            notificationRef.current.style.visibility = 'hidden';
        }
    }, [notification.message.title, notification.position.height, notification.position.right, dispatch]);

    return (
        <header className='nav'>
            <div className='nav__header'>
                <div className='nav__logo'>
                    <GiBearHead className='nav__icon' />
                    <h4 className='nav__title'>WildBear</h4>
                </div>
                <div onClick={handleNavigateCart} className='nav__icon-wrapper'>
                    <RiShoppingCart2Fill className='nav__icon' />
                    <div className='nav__badge' style={{ display: currentCartItem.length === 0 && 'none' }} >{currentCartItem?.length}</div>
                </div>
            </div>
            <div className='nav__tabs'>
                {index.map((item) => {
                    return (
                        <h4 key={item.tab}
                            className={item.nav.slice(0, item.nav.indexOf('/', 1)) === path
                                ? 'nav__tab nav__tab--active'
                                : 'nav__tab nav__tab--inactive'}>
                            <Link to={item.nav}>{item.tab}</Link>
                        </h4>
                    );
                })}
            </div>
            {modal}
        </header>
    );
}

export default Nav;