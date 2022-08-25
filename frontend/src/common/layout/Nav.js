import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiShoppingCart2Fill } from 'react-icons/ri';

import { selectCartItem, updateCartItem } from '../../features/products/productsSlice';
import { useEffect } from 'react';

const Nav = () => {

    const index = [
        { tab: 'HOME', nav: '/' },
        { tab: 'PRODUCTS', nav: '/products/all/page=1' },
        { tab: 'ABOUT', nav: '/about' },
        { tab: 'CONTACT', nav: '/contact' }
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const path = location.pathname.slice(0, location.pathname.indexOf('/', 1));
    const currentCartItem = useSelector(selectCartItem);

    const handleNavigateCart = () => {
        navigate('cart');
    }

/*     useEffect(() => {
        const item = localStorage.getItem('cartItem');
        if (item !== null) {
            dispatch(updateCartItem(JSON.parse(item)));
        }
    }, []);


    useEffect(() => {
        if (currentCartItem.length > 0) {
            localStorage.setItem('cartItem', JSON.stringify(currentCartItem));
        }
    }, [currentCartItem]); */

    useEffect(() => {
        console.log(currentCartItem)
    }, [currentCartItem])

    return (
        <header className='nav'>
            <div className='nav__header'>
                <h4 className='nav__title'>WildBear - Best Seller in Camping Equipment</h4>
                <div onClick={handleNavigateCart} className='nav__icon-wrapper'>
                    <RiShoppingCart2Fill className='nav__icon' />
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
        </header>
    );
}

export default Nav;