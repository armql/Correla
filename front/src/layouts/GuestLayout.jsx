import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../views/Navbar'

export default function GuestLayout() {
  return (
    <div className='bg-gray-50 h-screen w-screen'>
        <div className='relative'>
            <Navbar />
            <Outlet />
        </div>
    </div>
  )
}
