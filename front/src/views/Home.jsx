import React, { useState } from 'react';

export default function Home() {
    const [schedule, setSchedule] = useState({
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
    });

    const toggleScheduler = (day) => {
        setSchedule((prevSchedule) => ({
            ...prevSchedule,
            [day]: !prevSchedule[day],
        }));
    };

    const renderScheduler = (day) => {
        if (schedule[day]) {
            return (
                <div
                    className='border'
                >
                    <div className='text-xl grid-cols-1'>
                        <button type='button'
                            className='w-full hover:bg-gray-50 transition p-6'>
                            9:00 - 10:00
                        </button>
                        <button type='button'
                            className='w-full hover:bg-gray-50 transition p-6 border-t-2'>
                            10:00 - 11:00
                        </button>
                        <button type='button'
                            className='w-full hover:bg-gray-50 transition p-6 border-t-2'>
                            11:00 - 12:00
                        </button>
                        <button type='button'
                            className='w-full hover:bg-red-200 bg-gray-200 transition p-6 border-t-2' disabled>
                            12:00 - 13:00 BREAK
                        </button>
                        <button type='button'
                            className='w-full hover:bg-gray-50 transition p-6 border-t-2'>
                            14:00 - 15:00
                        </button>
                        <button type='button'
                            className='w-full hover:bg-gray-50 transition p-6 border-t-2'>
                            15:00 - 16:00
                        </button>
                        <button type='button'
                            className='w-full hover:bg-gray-50 transition p-6 border-t-2'>
                            16:00 - 17:00
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className=''>
                    <div className='grid grid-cols-1 text-lg text-gray-500 h-full'>
                        <button type='button' className='w-full transition p-6'>
                            No schedules for {day}.
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className='parent'>
            <div className='bg-sky-950 text-white p-12 flex items-center justify-center font-bold text-3xl'>
                Orari i termineve
            </div>
            <div className='grid bg-white grid-cols-3 lg:grid-cols-6 items-center justify-center text-center'>
                {Object.keys(schedule).map((day) => (
                    <button
                        key={day}
                        onClick={() => toggleScheduler(day)}
                        type='button'
                        className={`p-10 bg-sky-50 hover:bg-sky-100 ${schedule[day] ? 'active:bg-sky-200' : ''
                            }`}
                    >
                        {day}
                    </button>
                ))}
                {Object.keys(schedule).map((day) => (
                    <div key={day} className='h-screen'>{renderScheduler(day)}</div>
                ))}
            </div>
        </div>
    );
}