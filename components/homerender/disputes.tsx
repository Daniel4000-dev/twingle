import { DisputeItem } from '@/types/types';
import React from 'react';

const Disputes = () => {
    const DISPUTE_ITEMS: DisputeItem[] = [
        {
            name: 'Chiamaka',
            mail: 'chiamaka@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '19 Jan, 2022',
            time: '10:29 AM',
        },
        {
            name: 'Oni',
            mail: 'oni@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '17 Jan, 2022',
            time: '10:14 pM',
        },
        {
            name: 'Oluwatobi',
            mail: 'oluwatobi@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '18 Jan, 2022',
            time: '7:15 pM',
        },
        {
            name: 'Chiamaka',
            mail: 'chiamaka@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '19 Jan, 2022',
            time: '10:29 AM',
        },
        {
            name: 'Oni',
            mail: 'oni@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '17 Jan, 2022',
            time: '10:14 pM',
        },
        {
            name: 'Oluwatobi',
            mail: 'oluwatobi@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '18 Jan, 2022',
            time: '7:15 pM',
        },
        {
            name: 'Chiamaka',
            mail: 'chiamaka@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '19 Jan, 2022',
            time: '10:29 AM',
        },
        {
            name: 'Oni',
            mail: 'oni@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '17 Jan, 2022',
            time: '10:14 pM',
        },
        {
            name: 'Oluwatobi',
            mail: 'oluwatobi@gmail.com',
            body: 'Hello there, I am having difficulty setting up my account. My password keeps being declined each time i add it to the form. What',
            date: '18 Jan, 2022',
            time: '7:15 pM',
        },
    ]
  return (
    <div className=" ">
            <div className="w-full h-[32rem] col-span- relative px4 pt- bg-white rounded-lg overflow-scroll">
                <ul>
                    {DISPUTE_ITEMS.map((item, index) => (
                        <li key={index} className='flex flex-col gap-2 mb-4 itemscenter bg-gray-100 rounded-lg -4'>
                        <div className='flex justify-between m-4'>
                        <div>
                        <div className="flex gap-4 items-center">
                            <h2 className="">
                                {item.name}
                            </h2>
                            <h2 className='text-gray-200 text-xs'>
                                {item.mail}
                            </h2>
                        </div>
                        <div className=" overflow-hidden text-overflow-ellipsis">
                        <h2 className='text-sm line-clamp-1'>{item.body}</h2>
                        </div>
                        </div>

                        <div className='text-xs flex flex-col gap-2 direction-reverse text-gray-200'>
                            <h2>{item.date}</h2>
                            <h2>{item.time}</h2>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
              </div>
          </div>
  )
}

export default Disputes