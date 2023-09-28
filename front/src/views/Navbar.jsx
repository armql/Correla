import React, { useState } from 'react'

export default function Navbar() {
    const [summary, setSummary] = useState(false);


    const toggleSummary = () => {
        setSummary(!summary);
    };

    return (
        <div className='bg-white backdrop-blur-sm bg-opacity-40'>
            <div className='h-24 flex justify-center text-sky-900 items-center font-bold text-5xl'>
                Your company name
            </div>
            <div className='w-full h-full mt-4 font-semibold'>
                <div className='grid grid-cols-2 lg:grid-cols-5 text-center  justify-evenly text-black items-center text-2xl'>
                    <button onClick={toggleSummary} type='button' className='p-4 hover:text-sky-950 hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-20 transition'>
                        Our work
                    </button>
                    <button type='button' className='p-4 hover:text-sky-950 hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-20 transition'>
                        Find us here
                    </button>
                    <button type='button' className='p-4 hover:text-sky-950 hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-20 transition'>
                        Services
                    </button>
                    <button type='button' className='p-4 hover:text-sky-950 hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-20 transition'>
                        Questions
                    </button>
                    <button type='button' className='p-4 hover:text-sky-950 hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-20 transition'>
                        Why us
                    </button>
                </div>
                {summary && (
                    <div className='bg-white p-12 text-center gap-6 flex items-center justify-center flex-col font-normal'>
                        <h1 className='text-2xl'>Lorem, ipsum dolor sit amet consectetur</h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
