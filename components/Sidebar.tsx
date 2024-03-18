import React from 'react';
import Image from 'next/image';
import Link from 'next/link.ts';
import { RxDashboard, RxPerson } from 'react-icons/rx';
import { PiUsersThree } from 'react-icons/pi';

interface SidebarProps {
    children: React.ReactNode;
    currentRoute: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children, currentRoute }) => {
  return (
    <nav className='flex'>
        <div className='fixed w-[18vw] h-screen p-5 pt-8 text-white bg-black border-r-[1px] flex flex-col'>
            <div className="flex justify-between mb-7">
                <h2 className="text-xl">Twingle</h2>
                <h2 className="text-sm font-thin text-gray-300">Tier 1</h2>
            </div>
            <div className='flex gap-4 flex-col mt-5'>
               <Link to='/' className ={currentRoute === '/' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Summary</h2>
                </div>
               </Link>
               <Link to='/adminmanagement' className ={currentRoute === '/adminmanagement' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <PiUsersThree size={20} />
                    <h2 className='text-sm'>Admin Management</h2>
                </div>
               </Link>
               <Link to='/customers' className ={currentRoute === '/customers' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <PiUsersThree size={20} />
                    <h2 className='text-sm'>Customers</h2>
                </div>
               </Link>
               <Link to='/customersupport' className ={currentRoute === '/customersupport' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Customer Support</h2>
                </div>
               </Link>
               <Link to='/reportsandcomplaints' className ={currentRoute === '/reportsandcomplaints' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Reports and complaints</h2>
                </div>
               </Link>
               <Link to='/subscriptions' className ={currentRoute === '/subscriptions' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Subscriptions</h2>
                </div>
               </Link>
               <Link to='/settings' className ={currentRoute === '/settings' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Settings</h2>
                </div>
               </Link>
               <Link to='/advertisement' className ={currentRoute === '/advertisement' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Advertisement</h2>
                </div>
               </Link>
            </div>
        </div>
        <main className='ml-[18vw] w-full'>{children}</main>
    </nav>
  )
}

export default Sidebar