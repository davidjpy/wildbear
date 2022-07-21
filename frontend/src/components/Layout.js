import { Outlet } from 'react-router-dom';

import './Layout.css';

import Nav from './Nav';

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default Layout;
