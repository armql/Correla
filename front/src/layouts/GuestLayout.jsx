import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import background from '../assets/images/form-gray-background.svg';

const guestLayoutStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

export default function GuestLayout() {
    return (
        <div className='bg-transparent h-screen w-screen'>
            <div className='relative h-screen w-screen' style={guestLayoutStyle}>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}
