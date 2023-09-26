import React from 'react'

export default function Home() {
    return (
        <div className='parent'>
            <div className='bg-sky-950 text-white p-12 flex items-center justify-center font-bold text-3xl'>
                Our Schedules
            </div>
            <div className='grid bg-white grid-cols-3 lg:grid-cols-6 items-center justify-center text-center'>
                <div className='relative group p-10 border bg-white hover:border-sky-300 hover:shadow transition cursor-pointer duration-500 active:translate-y-1'>
                    Monday
                </div>
                <div className='group p-10 border bg-white hover:border-sky-300 hover:shadow transition cursor-pointer duration-500 active:translate-y-1'>
                    Tuesday
                </div>
                <div className='group p-10 border bg-white hover:border-sky-300 hover:shadow transition cursor-pointer duration-500 active:translate-y-1'>
                    Wednesday
                </div>
                <div className='group p-10 border bg-white hover:border-sky-300 hover:shadow transition cursor-pointer duration-500 active:translate-y-1'>
                    Thursday
                </div>
                <div className='group p-10 border bg-white hover:border-sky-300 hover:shadow transition cursor-pointer duration-500 active:translate-y-1'>
                    Friday
                </div>
                <div className='group p-10 border bg-white hover:border-sky-300 hover:shadow transition cursor-pointer duration-500 active:translate-y-1'>
                    Saturday
                </div>
                <div className='text-xl grid-cols-1'>
                    <div className='p-2 border-t-2 border-r-2 border-l-2'>9:00 - 10:00</div>
                    <div className='p-2 border-t-2 border-r-2 border-l-2'>10:00 - 11:00</div>
                    <div className='p-2 border-t-2 border-r-2 border-l-2'>11:00 - 12:00</div>
                    <div className='p-2 border-t-2 border-r-2 border-l-2 bg-red-100'>12-13:00 BREAK</div>
                    <div className='p-2 border-t-2 border-r-2 border-l-2'>13:00 - 14:00</div>
                    <div className='p-2 border-t-2 border-r-2 border-l-2'>14:00 - 15:00</div>
                    <div className='p-2 border-t-2 border-r-2 border-l-2 border-b-2'>16:00 - 17:00</div>
                </div>
            </div>
        </div>
    )
}
