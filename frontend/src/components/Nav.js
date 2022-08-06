import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { navigation } from '../features/nav/navSlice';


const Nav = () => {

    const index = [
        { tab: 'HOME', nav: '/' },
        { tab: 'PRODUCTS', nav: 'products' },
        { tab: 'HOT SALES', nav: 'hotsales' },
        { tab: 'ABOUT', nav: 'about' },
        { tab: 'CONTACT', nav: 'contact' }
    ];

    const dispatch = useDispatch();
    const currentTab = useSelector((state) => state.nav.tab);

    console.log(currentTab)

    return (
        <header className='nav'>
            <div className='nav__header'>
                <h4 className='nav__title'>E-Commerce</h4>
            </div>
            <div className='nav__tabs'>
                {index.map((item) => {
                    return (
                        <h4 onClick={() => dispatch(navigation({ tab: item.tab, nav: item.nav}))} key={item.tab}
                            className={item.tab === currentTab.currentTab
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