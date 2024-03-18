import React from 'react';
import { data } from './data.js';

const Complaints = () => {
  return (
    <div className=" ">
            <div className="w-full col-span-1 relative lg:h-[52vh] h-[50vh] m-auto px-4 pt-4 bg-white rounded-lg overflow-scroll">
                  <h2 className="textstart font-semibold mb-5">Summary of complaints</h2>
                <ul>
                    {data.map((complaint, id) => (
                        <li key={id} className='flex flex-col gap-2 mb-4 items-center'>
                            <div className="w-full  rounded-lg shadow-sm shadow-purple-200">
                                <h2 className="bg-purple-200 text-sm rounded-t-lg pl-6 p-1">
                                    {complaint.title}
                                </h2>
                                <div className="flex justify-around m-2 pt-1 pb-1">
                                <h2>
                                    {complaint.report}
                                </h2>
                                <p>--</p>
                                <h2 className="text-sm">{complaint.time}</h2>
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