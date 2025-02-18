import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const Client = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen pt-16'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Client;