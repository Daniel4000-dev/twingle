import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-4 gap-3 p-4 mx-4'>
        <div className='bg-white flex justify-between w-full p-1 rounded-lg'>
        <div className="h-full pl-4  bg-white rounded-lg flex items-center">
              <div>
                <p className="text-lg p-1 pr-2">ok</p>
              </div>
              <div className="h-full w45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[13px]">Revenue</h4>
                <h2 className="text-2xl text-sky-800 font-medium">₦128,939,938</h2>
                <h4 className="text-[12px] text-green-500">
                  8% from last month
                </h4>
              </div>
            </div>
        </div>

        <div className='col-span-1 bg-white flex justify-between w-full p-1 rounded-lg'>
        <div className="h-full pl-4 bg-white rounded-lg flex items-center">
              <div>
                <p className="text-lg p-1 pr-2">ok</p>
              </div>
              <div className="h-full w-45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[13px]">Sign ups</h4>
                <h2 className="text-2xl font-medium">123,847</h2>
                <h4 className="text-[12px] text-green-500">
                  6% from last month
                </h4>
              </div>
            </div>
        </div>

        <div className='col-span-1 bg-white flex justify-between w-full p-1 rounded-lg'>
        <div className="h-full pl-4 bg-white rounded-lg flex items-center">
              <div>
                <p className="text-lg p-1 pr-2">ok</p>
              </div>
              <div className="h-full w-45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[13px]">Active users</h4>
                <h2 className="text-2xl font-medium">73,420</h2>
                <h4 className="text-[12px] text-red-600">4% from last month</h4>
              </div>
            </div>
        </div>

        <div className='col-span-1 bg-white flex justify-between w-full p-1 rounded-lg'>
        <div className="h-full pl-4 bg-white rounded-lg flex items-center">
              <div>
                <p className="text-lg p-1 pr-2">ok</p>
              </div>
              <div className="h-full w-45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[13px]">Matches</h4>
                <h2 className="text-2xl font-medium">₦128,939,938</h2>
                <h4 className="text-[12px]">- same as last month</h4>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TopCards