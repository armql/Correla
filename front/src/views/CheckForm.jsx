import React, { useState, useEffect } from 'react'
import cardDoctor from '../assets/svg/doctors.svg'
import cardFamily from '../assets/svg/family.svg'

export default function CheckForm({ isVisible, onClose }) {
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAppeared(true);
      }, 10);
    } else {
      setAppeared(false);
    }
  }, [isVisible]);

  return (
    <div className='h-full bg-transparent'>
      <div className='flex justify-between items-center bg-white'>
        <div className='grid grid-cols-3 gap-2 px-4'>
          <div className='bg-white border-2 shadow-sm rounded-sm'>
              <img src={cardFamily} alt="" className='p-4'/>
              <div className='font-normal bg-gray-50 px-2.5 py-3'>
                <h1 className='font-semibold border-b-2 border-gray-800 text-lg'>Assured quality</h1>
                <p className='text-gray-700'>Our crew is proven to be the best</p>
              </div>
          </div>
          <div className='bg-white border-2 shadow-sm rounded-sm'>
              <img src={cardDoctor} alt="" className='p-4'/>
              <div className='font-normal bg-gray-50 px-2.5 py-3'>
                <h1 className='font-semibold border-b-2 border-gray-800 text-lg'>Assured quality</h1>
                <p className='text-gray-700'>Our crew is proven to be the best</p>
              </div>
          </div>
          <div className='bg-white border-2 shadow-sm rounded-sm'>
              <img src={cardDoctor} alt="" className='p-4'/>
              <div className='font-normal bg-gray-50 px-2.5 py-3'>
                <h1 className='font-semibold border-b-2 border-gray-800 text-lg'>Assured quality</h1>
                <p className='text-gray-700'>Our crew is proven to be the best</p>
              </div>
          </div>
        </div>
        <div className={` p-16 px-14 appear-transition bg-white ${appeared ? 'appeared' : ''}`}>
      
          <form action="">
            <div className='flex items-center justify-center text-xl font-semibold mb-4'>
              Check form
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-2'>
                <div className='flex flex-col gap-1 font-normal'>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" className='border-2 border-gray-100 rounded-md shadow-sm py-2 px-1.5 font-normal' id="firstName" placeholder='John' />
                </div>
                <div className='flex flex-col gap-1 font-normal'>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="lastName" className='border-2 border-gray-100 rounded-md shadow-sm py-2 px-1.5 font-normal' id="lastName" placeholder='Doe' />
                </div>
              </div>
              <div className='flex flex-col gap-2 font-normal'>
                <label htmlFor="checkDate" className="text-gray-800">Select Check Date</label>
                <input type="date" name="checkDate" id="checkDate" className='border-2 border-gray-100 rounded-md shadow-sm py-2 px-1.5 font-normal text-gray-400' />
              </div>
            </div>
            <div className='flex justify-center items-center mt-6'>
              <button type="submit" className='bg-gray-100 px-16 rounded-sm py-3 hover:scale-95 hover:bg-gray-200 transition '>Get Checked</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
