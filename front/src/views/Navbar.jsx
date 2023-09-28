import React, { useState } from 'react';

export default function Navbar() {
    const buttons = [
        {
            text: 'Our work',
            modalTitle: 'Our Work',
            modalContent:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.',
        },
        {
            text: 'Find us here',
            modalTitle: 'Find Us Here',
            modalContent:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.',
        },
        {
            text: 'Services',
            modalTitle: 'Services',
            modalContent:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.',
        },
        {
            text: 'Questions',
            modalTitle: 'Questions',
            modalContent:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.',
        },
        {
            text: 'Why us',
            modalTitle: 'Why us',
            modalContent:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.',
        },
    ];

    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const toggleSummary = (index) => {
        setActiveButtonIndex(index === activeButtonIndex ? null : index);
    };

    return (
        <div className="bg-white backdrop-blur-sm bg-opacity-40">
            <div className="h-24 flex justify-center text-sky-900 items-center font-bold text-5xl">
                Your company name
            </div>
            <div className="w-full h-full mt-4 font-semibold">
                <div className="grid grid-cols-2 lg:grid-cols-5 text-center  justify-evenly text-black items-center text-2xl">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => toggleSummary(index)}
                            type="button"
                            className="p-4 hover:text-sky-950 hover:bg-white hover:backdrop-blur-sm hover:bg-opacity-20 transition"
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
                {activeButtonIndex !== null && (
                    <div className="bg-white p-12 text-center gap-6 flex items-center justify-center flex-col font-normal">
                        <h1 className="text-2xl">{buttons[activeButtonIndex].modalTitle}</h1>
                        <p>{buttons[activeButtonIndex].modalContent}</p>
                    </div>
                )}
                {activeButtonIndex === null && (
                    <div className="bg-white p-9 text-start gap-2 flex items-start justify-between flex-col font-normal">
                        <div>
                            <h1 className='text-3xl'>Make reservation now</h1>
                            <p className='text-lg text-sky-900 px-1'>If you have problems, get checked now and we will find a solution together!</p>
                            <div className='mt-2'>
                                <button className='bg-gray-100 hover:bg-gray-200 transition text-black p-4'>Get checked</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
