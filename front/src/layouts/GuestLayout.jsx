import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../views/Navbar'
import Footer from '../views/Footer'

export default function GuestLayout() {
  return (
    <div className='bg-gray-50 h-screen w-screen'>
        <div className='relative'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}
