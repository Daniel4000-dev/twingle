"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDashboard, RxPerson } from 'react-icons/rx';
import { PiUsersThree } from 'react-icons/pi';
import Customers from './Customers.tsx';
import AdminManagement from './AdminManagement.tsx';
import CustomerSupport from './CustomerSupport.tsx';
import ReportsAndComplaints from './ReportsAndComplaints.tsx';
import Subscriptions from './Subscriptions.tsx';
import Settings from './Settings.tsx';
import Advertisement from './Advertisement.tsx';
import { GoPerson } from 'react-icons/go';
import { SIDENAV_ITEMS } from '@/constants/sidebar_constants';
import SideBarMenuItems from './sidebarmenuitems';

const Sidebar = () => {
  return (
    <div className='flex'>
        <div className='fixed w-[12.6rem] sm:w-[20rem] h-screen p-5 pt-8 text-white bg-black border-r-[1px] flex flex-col'>
            <div className="flex justify-between mb-7">
                <h2 className="text-xl">Twingle</h2>
                <h2 className="text-sm font-thin text-gray-300">Tier 1</h2>
            </div>
            <nav className='mt-4'>
                <div>
                    {SIDENAV_ITEMS.map((item, index) => {
                        return (
                            <SideBarMenuItems key={index} menuItem={item} />
                        )
                    })}
                </div>
            </nav>
            {/* <div className='flex gap-4 flex-col mt-5'>
               <Link href='/' className ={currentRoute === '/' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Summary</h2>
                </div>
               </Link>
               <Link href='/adminmanagement' className ={currentRoute === '/adminmanagement' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <GoPerson size={20} />
                    <h2 onClick={() => router.push('/')} className='text-sm'>Admin Management</h2>
                </div>
               </Link>
               <Link href='/customers' className ={currentRoute === '/customers' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <PiUsersThree size={20} />
                    <h2 className='text-sm'>Customers</h2>
                </div>
               </Link>
               <Link href='/customersupport' className ={currentRoute === '/customersupport' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Customer Support</h2>
                </div>
               </Link>
               <Link href='/reportsandcomplaints' className ={currentRoute === '/reportsandcomplaints' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Reports and complaints</h2>
                </div>
               </Link>
               <Link href='/subscriptions' className ={currentRoute === '/subscriptions' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Subscriptions</h2>
                </div>
               </Link>
               <Link href='/settings' className ={currentRoute === '/settings' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Settings</h2>
                </div>
               </Link>
               <Link href='/advertisement' className ={currentRoute === '/advertisement' ? 'active' : 'text-gray-400 p-3'}>
                <div className='flex gap-2 '>
                    <RxDashboard size={20} />
                    <h2 className='text-sm'>Advertisement</h2>
                </div>
               </Link>
            </div> */}
        </div>
    </div>
  )
}

export default Sidebar