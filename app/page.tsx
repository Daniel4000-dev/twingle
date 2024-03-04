import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h flex-row items-center justify-between w-screen">
        <div className="w-[20vw] h-screen bg-black text-white">
          <div className='flex flex-col flex-1 m-4'>
            <div className='flex justify-between'>
                <h2 className="">Twingle</h2>
                <h2 className="text-sm text-gray-300">Tier 1</h2>
            </div>

            <div className="hover:bg-gray-50 hover:bg-opacity-5 hover:rounded-lg">
              <h2>go away</h2>
            </div>  
          </div>
        </div>

        <div className="w-[80vw] flex flex-col items-center bg-gray-100 text-black">
         <div className="w-[76vw] mt-4">
         <div className="flex justify-between mb-12">
            <h2 className="text-3xl">Summary</h2>
            <div>
              <h2>jeddy Teep</h2>
            </div>
          </div>

          <div className="flex gap-4 justify-between mb-4">
            <div className="h-full w-[19vw] pl-4 bg-white rounded-lg flex items-center">
              <div>
                <p className='text-lg p-1'>ok</p>
              </div>
              <div className="h-full w-45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[12px]">Revenue</h4>
                <h2 className="text-xl">₦128,939,938</h2>
                <h4 className="text-[12px] text-green-500">8% from last month</h4>
              </div>
            </div>
            <div className="h-full w-[19vw] pl-4 bg-white rounded-lg flex items-center">
              <div>
                <p className='text-lg p-1'>ok</p>
              </div>
              <div className="h-full w-45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[12px]">Sign ups</h4>
                <h2 className="text-xl">123,847</h2>
                <h4 className="text-[12px] text-green-500">6% from last month</h4>
              </div>
            </div>
            <div className="h-full w-[19vw] pl-4 bg-white rounded-lg flex items-center">
              <div>
                <p className='text-lg p-1'>ok</p>
              </div>
              <div className="h-full w-45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[12px]">Active users</h4>
                <h2 className="text-xl">73,420</h2>
                <h4 className="text-[12px] text-red-600">4% from last month</h4>
              </div>
            </div>
            <div className="h-full w-[19vw] pl-4 bg-white rounded-lg flex items-center">
              <div>
                <p className='text-lg p-1'>ok</p>
              </div>
              <div className="h-full w-45 bg-white text-start  justifycenter p-2 rounded-lg">
                <h4 className="text-[12px]">Matches</h4>
                <h2 className="text-xl">₦128,939,938</h2>
                <h4 className="text-[12px]">- same as last month</h4>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-between mb-4">
            <div className="w-[53vw] bg-white rounded-lg">
              p
            </div>
            <div className="w-[23vw] bg-white rounded-lg">
             <div className="w-[22.9vw] flex flex-col items-center text-start">
             <div className="w-[21vw] mb-4 pt-3">
              <h2 className="textstart">Summary of complaints</h2>
             </div>
              <div className="flex flex-col gap-2 mb-4 items-center">
              <div className="w-[21vw]  rounded-lg shadow-sm shadow-purple-200">
                <h2 className="bg-purple-200 text-sm rounded-t-lg pl-6 p-1">Inappropriate language</h2>
                <div className="flex justify-around m-2 pt-1 pb-1">
                  <h2>552 <span className='text-sm'>reports</span></h2>
                  <p>--</p>
                  <h2 className="text-sm">in the past month</h2>
                </div>
              </div>
              <div className="w-[21vw]  rounded-lg shadow-sm shadow-purple-200">
                <h2 className="bg-purple-200 text-sm rounded-t-lg pl-6 p-1">Inappropriate language</h2>
                <div className="flex justify-around m-2 pt-1 pb-1">
                  <h2>552 <span className='text-sm'>reports</span></h2>
                  <p>--</p>
                  <h2 className="text-sm">in the past month</h2>
                </div>
              </div>
              <div className="w-[21vw]  rounded-lg shadow-sm shadow-purple-200">
                <h2 className="bg-purple-200 text-sm rounded-t-lg pl-6 p-1">Inappropriate language</h2>
                <div className="flex justify-around m-2 pt-1 pb-1">
                  <h2>552 <span className='text-sm'>reports</span></h2>
                  <p>--</p>
                  <h2 className="text-sm">in the past month</h2>
                </div>
              </div>
              <div className="w-[21vw]  rounded-lg shadow-sm shadow-purple-200">
                <h2 className="bg-purple-200 text-sm rounded-t-lg pl-6 p-1">Inappropriate language</h2>
                <div className="flex justify-around m-2 pt-1 pb-1">
                  <h2>552 <span className='text-sm'>reports</span></h2>
                  <p>--</p>
                  <h2 className="text-sm">in the past month</h2>
                </div>
              </div>
              </div>
             </div>
            </div>
          </div>

          <div className="bg-white">
p
          </div>
         </div>
        </div>
    </div>
  );
}
