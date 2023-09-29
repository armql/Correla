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

  const [breaks, setBreak] = useState(false);
  const [currentTime, setCurrentTime] = useState(DateTime.now());
  const [schedule, setSchedule] = useState(initialSchedule);
  const [breakSchedule, setBreakSchedule] = useState({});

  const toggleReservation = (day, time) => {
    if (time.includes('BREAK')) {
      setBreakSchedule((prevBreakSchedule) => ({
        ...prevBreakSchedule,
        [day]: {
          ...prevBreakSchedule[day],
          [time]: !prevBreakSchedule[day]?.[time],
        },
      }));
    } else {
      setSchedule((prevSchedule) => ({
        ...prevSchedule,
        [day]: {
          ...prevSchedule[day],
          [time]: !prevSchedule[day]?.[time],
        },
      }));
    }
  };

  const isReserved = (day, time) => {
    if (time.includes('BREAK')) {
      return false;
    }
    return schedule[day]?.[time];
  };

  const isBreakReserved = (day, time) => {
    if (time.includes('BREAK')) {
      return breakSchedule[day]?.[time];
    }
    return false;
  };

  const renderScheduler = (day) => {
    return (
      <div className='border'>
        <div className='text-xl grid-cols-1'>
          {Object.keys(schedule[day]).map((time) => (
            <button
              key={time}
              type='button'
              className={`w-full bg-white relative transition text-[18px] p-6 ${(isReserved(day, time) || isBreakReserved(day, time)) ? 'cursor-default bg-white' : ''
                }`}
              onClick={() => toggleReservation(day, time)}
            >
              {(isReserved(day, time) || isBreakReserved(day, time)) && (
                <div className='uppercase absolute text-red-900 bg-red-100 px-1 py-0.5 rounded-tl-sm text-sm right-0 bottom-0'>
                  reserved
                </div>
              )}
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

    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className='parent h-full bg-white backdrop-blur-sm bg-opacity-40'>
      <div className='text-black flex flex-col gap-4 items-center justify-center font-bold'>
        <div className={`text-9xl py-6 font-bold`}>
          {currentTime.toFormat('HH:mm')}
        </div>
      </div>
      <div className='flex items-center flex-col justify-center'>
        <div className='grid grid-cols-3 lg:grid-cols-6 items-center justify-center text-center'>
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              type='button'
              className={`bg-white backdrop-blur-sm bg-opacity-70 px-10 py-8 cursor-default uppercase text-lg text-black tracking-tighter font-semibold`}
            >
              {day}
            </button>
          ))}
          {Object.keys(schedule).map((day) => (
            <div key={day} className=''>
              {renderScheduler(day)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}