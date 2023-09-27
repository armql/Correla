import React, { useState } from 'react'

export default function Home() {
    const [schedule, setSchedule] = useState(false);

    const toggleScheduler = () => {
        setSchedule(!schedule);
    }
    return (
        <div className='parent'>
            <div className='bg-sky-950 text-white p-12 flex items-center justify-center font-bold text-3xl'>
                Orari i termineve
            </div>
            <div className='grid bg-white grid-cols-3 lg:grid-cols-6 items-center justify-center text-center'>
                <button onClick={toggleScheduler} type="button" className='relative group text-xl p-10 border bg-white hover:border-sky-300 hover:shadow transition cursor-pointer active:bg-sky-50'>
                    Monday
                </button>
                <button type="button" className='group p-10 border bg-white hover:border-sky-300 hover:shadow text-xl transition cursor-pointer active:bg-sky-50'>
                    Tuesday
                </button>
                <button type="button" className='group p-10 border bg-white hover:border-sky-300 hover:shadow text-xl transition cursor-pointer active:bg-sky-50'>
                    Wednesday
                </button>
                <button type="button" className='group p-10 border bg-white hover:border-sky-300 hover:shadow text-xl transition cursor-pointer active:bg-sky-50'>
                    Thursday
                </button>
                <button type="button" className='group p-10 border bg-white hover:border-sky-300 hover:shadow text-xl transition cursor-pointer active:bg-sky-50'>
                    Friday
                </button>
                <button type="button" className='group p-10 border bg-white hover:border-sky-300 hover:shadow text-xl transition cursor-pointer active:bg-sky-50'>
                    Saturday
                </button>
                {schedule && (
                <div className='text-xl grid-cols-1'>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>9:00 - 10:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>10:00 - 11:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>11:00 - 12:00</button>
                    <button type='button' className='w-full p-6 border-t-2 border-r-2 border-l-2 bg-red-100' disabled>12-13:00 BREAK</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>13:00 - 14:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>14:00 - 15:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2 border-b-2'>16:00 - 17:00</button>
                </div>
                )}
                {schedule && (
                <div className='text-xl grid-cols-1'>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>9:00 - 10:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>10:00 - 11:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>11:00 - 12:00</button>
                    <button type='button' className='w-full p-6 border-t-2 border-r-2 border-l-2 bg-red-100' disabled>12-13:00 BREAK</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>13:00 - 14:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>14:00 - 15:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2 border-b-2'>16:00 - 17:00</button>
                </div>
                )}
                {schedule && (
                <div className='text-xl grid-cols-1'>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>9:00 - 10:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>10:00 - 11:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>11:00 - 12:00</button>
                    <button type='button' className='w-full p-6 border-t-2 border-r-2 border-l-2 bg-red-100' disabled>12-13:00 BREAK</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>13:00 - 14:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>14:00 - 15:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2 border-b-2'>16:00 - 17:00</button>
                </div>
                )}
                {schedule && (
                <div className='text-xl grid-cols-1'>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>9:00 - 10:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>10:00 - 11:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>11:00 - 12:00</button>
                    <button type='button' className='w-full p-6 border-t-2 border-r-2 border-l-2 bg-red-100' disabled>12-13:00 BREAK</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>13:00 - 14:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>14:00 - 15:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2 border-b-2'>16:00 - 17:00</button>
                </div>
                )}
                {schedule && (
                <div className='text-xl grid-cols-1'>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>9:00 - 10:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>10:00 - 11:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>11:00 - 12:00</button>
                    <button type='button' className='w-full p-6 border-t-2 border-r-2 border-l-2 bg-red-100' disabled>12-13:00 BREAK</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>13:00 - 14:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>14:00 - 15:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2 border-b-2'>16:00 - 17:00</button>
                </div>
                )}
                {schedule && (
                <div className='text-xl grid-cols-1'>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>9:00 - 10:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>10:00 - 11:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>11:00 - 12:00</button>
                    <button type='button' className='w-full p-6 border-t-2 border-r-2 border-l-2 bg-red-100' disabled>12-13:00 BREAK</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>13:00 - 14:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2'>14:00 - 15:00</button>
                    <button type='button' className='w-full hover:shadow hover:bg-gray-50 transition p-6 border-t-2 border-r-2 border-l-2 border-b-2'>16:00 - 17:00</button>
                </div>
                )}
            </div>
        </div>
    )
}
