import { Link, useLocation } from 'react-router-dom';


const Nav = () => {

    const index = [
        { tab: 'HOME', nav: '/' },
        { tab: 'PRODUCTS', nav: '/products' },
        { tab: 'HOT SALES', nav: '/hotsales' },
        { tab: 'ABOUT', nav: '/about' },
        { tab: 'CONTACT', nav: '/contact' }
    ];

    const location = useLocation();

    return (
        <header className='nav'>
            <div className='nav__header'>
                <h4 className='nav__title'>E-Commerce</h4>
            </div>
            <div className='nav__tabs'>
                {index.map((item) => {
                    return (
                        <h4 key={item.tab}
                            className={item.nav === location.pathname
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