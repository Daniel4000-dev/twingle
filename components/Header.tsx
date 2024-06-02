'use client';
import React from 'react';
import { SIDENAV_ITEMS } from "@/constants/sidenav_items";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentRoute = usePathname();
  return (
    <header className='fixed top-0 w-full z-20 bg-gray-100 pb-12 pl-[12.6rem] sm:pl-[16rem]'>
          <div className="flex justify-between items-center mx-8 pb-2 pt-5 ">
          <div>
          {SIDENAV_ITEMS.map((item, index) => {
        return (
          <h2 key={index} className="text-lg sm:text-3xl font-bold">{currentRoute === item.path && <div>{item.title}</div> }</h2>
          )
        })}
        </div>
        <div className="flex justi">
         <h2>jeddy Teep</h2>
        </div>
    </div>
    </header>
  );
}

export default Header