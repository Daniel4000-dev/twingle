"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Customers from "./Customers";
import AdminManagement from "./AdminManagement";
import CustomerSupport from "./CustomerSupport";
import ReportsAndComplaints from "./ReportsAndComplaints";
import Subscriptions from "./Subscriptions";
import Settings from "./Settings";
import Advertisement from "./Advertisement";
import SideBarMenuItems from "./sidebarmenuitems";
import { SIDENAV_ITEMS } from "@/constants/SIDENAV_ITEMS";


const Sidebar = () => {
  return (
    <div className="fixed flex z-50 top-0">
      <div className="fixed w-[12.6rem] sm:w-[16rem] h-screen p-5 pt-8 text-white bg-black border-r-[1px] flex flex-col">
        <div className="flex justify-between mb-7">
          <h2 className="text-xl">Twingle</h2>
          <h2 className="text-sm font-thin text-gray-300">Tier 1</h2>
        </div>
        <nav className="mt-4">
          <div>
            {SIDENAV_ITEMS.map((item, index) => {
              return <SideBarMenuItems key={index} menuItem={item} />;
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar
