import { COMPLAINT_ITEMS } from '@/constants/complainitems';
import Image from '@/node_modules/next/image';
import { ComplaintItem } from '@/types/types';
import React from 'react';

const Complaints = () => {
    console.log('YES'); 
  return (
    <div className=" ">
            <div className="w-full h-[22rem] col-span-1 relative  m-auto px4 pt4 bg-white rounded-lg overflow-scroll">
                <ul>
                    {COMPLAINT_ITEMS.map((item, index) => (
                        <li key={index} className={`flex flex-col gap-2 mb-${index === (COMPLAINT_ITEMS.length - 1) ? '8' : '4'} items-center`}>
                        <div className="w-full  rounded-lg shadow-sm shadow-purple-200">
                            <div>
                                <Image className='w-8 h-8' src={item.icon} />
                            <h2 className="bg-purple-200 text-sm rounded-t-lg pl-6 p-1">
                                {item.description}
                            </h2>
                            </div>
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