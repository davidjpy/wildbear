import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className='header'>
            <div className='bar'>
                <h5 className='bar__title'>E-Commerce</h5>
            </div>
            <div className='nav'>
                <h3 className='nav__tab'>
                    <Link to='/'>HOME</Link>
                </h3>
                <h3 className='nav__tab'>
                    <Link to='product'>PRODUCTS</Link>
                </h3>
                <h3 className='nav__tab'>
                    <Link to='hotsales'>HOT SALES</Link>
                </h3>
                <h3 className='nav__tab'>
                    <Link to='about'>ABOUT</Link>
                </h3>
                <h3 className='nav__tab'>
                    <Link to='contact'>CONTACT</Link>
                </h3>
            </div>
        </div>
    );
}

export default Nav;