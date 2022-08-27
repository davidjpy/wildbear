import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Layout.css';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {

    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
