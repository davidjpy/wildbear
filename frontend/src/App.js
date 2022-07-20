import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

function App() {
    return (
        <Routes>
            <Route path='/' elemen={<Layout />}>

            </Route>
        </Routes>
    );
}

export default App;