import { ComplaintItem } from '@/types/types';
import React from 'react';

const Complaints = () => {
    const COMPLAINT_ITEMS: ComplaintItem[] = [
        {
            description: 'Inappropriate language',
            amount: '553 reports',
            time: 'in the past month'
        },
        {
            description: 'Fake profile',
            amount: '1249 reports',
            time: 'in the past month'
        },
        {
            description: 'Suspicious information',
            amount: '1357 reports',
            time: 'in the past month'
        },
        {
            description: 'Underage',
            amount: '760 reports',
            time: 'in the past month'
        },
        {
            description: 'Wrong address',
            amount: '345 reports',
            time: 'in the past month'
        },
        {
            description: 'False information',
            amount: '853 reports',
            time: 'in the past month'
        }
    ]
  return (
    <div className=" ">
            <div className="w-full h-[22rem] col-span-1 relative  m-auto px4 pt4 bg-white rounded-lg overflow-scroll">
                <ul>
                    {COMPLAINT_ITEMS.map((item, index) => (
                        <li key={index} className={`flex flex-col gap-2 mb-${index === (COMPLAINT_ITEMS.length - 1) ? '8' : '4'} items-center`}>
                        <div className="w-full  rounded-lg shadow-sm shadow-purple-200">
                            <h2 className="bg-purple-200 text-sm rounded-t-lg pl-6 p-1">
                                {item.description}
                            </h2>
                            <div className="flex justify-around items-center m-2 pt-1 pb-1">
                            <h2>
                                {item.amount}
                            </h2>
                            <p>--</p>
                            <h2 className="text-sm">{item.time}</h2>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
              </div>
          </div>
  )
}

export default Complaints