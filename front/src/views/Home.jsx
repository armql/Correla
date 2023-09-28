import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

export default function Home() {
    const initialSchedule = {
        Monday: {
            '9:00 - 10:00': true,
            '10:00 - 11:00': false,
            '11:00 - 12:00': false,
            '12:00 - 13:00 BREAK': true,
            '14:00 - 15:00': false,
            '15:00 - 16:00': false,
            '16:00 - 17:00': false,
        },
        Tuesday: {
            '9:00 - 10:00': false,
            '10:00 - 11:00': false,
            '11:00 - 12:00': false,
            '12:00 - 13:00 BREAK': true,
            '14:00 - 15:00': false,
            '15:00 - 16:00': false,
            '16:00 - 17:00': false,
        },
        Wednesday: {
            '9:00 - 10:00': false,
            '10:00 - 11:00': false,
            '11:00 - 12:00': false,
            '12:00 - 13:00 BREAK': true,
            '14:00 - 15:00': false,
            '15:00 - 16:00': false,
            '16:00 - 17:00': false,
        },
        Thursday: {
            '9:00 - 10:00': false,
            '10:00 - 11:00': false,
            '11:00 - 12:00': false,
            '12:00 - 13:00 BREAK': true,
            '14:00 - 15:00': false,
            '15:00 - 16:00': false,
            '16:00 - 17:00': false,
        },
        Friday: {
            '9:00 - 10:00': false,
            '10:00 - 11:00': false,
            '11:00 - 12:00': false,
            '12:00 - 13:00 BREAK': true,
            '14:00 - 15:00': false,
            '15:00 - 16:00': false,
            '16:00 - 17:00': false,
        },
        Saturday: {
            '9:00 - 10:00': false,
            '10:00 - 11:00': false,
            '11:00 - 12:00': false,
            '12:00 - 13:00 BREAK': true,
            '14:00 - 15:00': false,
            '15:00 - 16:00': false,
            '16:00 - 17:00': false,
        },
    };
    const [currentTime, setCurrentTime] = useState(DateTime.now());
    const [schedule, setSchedule] = useState(initialSchedule);

    const toggleReservation = (day, time) => {
        setSchedule((prevSchedule) => ({
            ...prevSchedule,
            [day]: {
                ...prevSchedule[day],
                [time]: !prevSchedule[day][time],
            },
        }));
    };

    const isReserved = (day, time) => schedule[day][time];

    const renderScheduler = (day) => {
        return (
            <div className='border'>
                <div className='text-xl grid-cols-1'>
                    {Object.keys(schedule[day]).map((time) => (
                        <button
                            key={time}
                            type='button'
                            className={`w-full hover:bg-gray-200 transition text-sm p-6 ${isReserved(day, time) ? 'bg-gray-100' : ''}`}
                            onClick={() => toggleReservation(day, time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>
        );
    };


    const updateCurrentTime = () => {
        const userTimeZone = 'Europe/Belgrade';
        const currentTimeInTimeZone = DateTime.now().setZone(userTimeZone);
        setCurrentTime(currentTimeInTimeZone);
    };

    useEffect(() => {
        updateCurrentTime();
    }, []);


    return (
        <div className='parent'>
            <div className='bg-black text-white flex flex-col gap-4 items-center justify-center font-bold'>
                <div className='text-9xl p-6 font-bold'>
                    {currentTime.toFormat('HH:mm')}
                </div>
            </div>
            <div className='flex items-center flex-col justify-center bg-white'>
                <div className='text-5xl mt-2 p-4 font-bold'>
                    Our Schedule
                </div>
                <div className='grid bg-white grid-cols-3 lg:grid-cols-6 items-center justify-center text-center'>
                    {Object.keys(schedule).map((day) => (
                        <button
                            key={day}
                            type='button'
                            className={`px-10 py-4 bg-white cursor-default uppercase text-lg text-black tracking-tighter font-bold ${isReserved(day, '9:00 - 10:00') ? '' : ''}`}
                        >
                            {day}
                        </button>
                    ))}
                    {Object.keys(schedule).map((day) => (
                        <div key={day} className='h-screen'>
                            {renderScheduler(day)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}