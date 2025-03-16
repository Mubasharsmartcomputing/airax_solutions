import React from 'react';
import Header from '../UI/Header';
import { Outlet } from 'react-router';
import Footer from '../UI/Footer';

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default AppLayout;
