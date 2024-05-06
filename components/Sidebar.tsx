"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { PiBookOpenTextThin, PiUsersThree } from "react-icons/pi";
import Customers from "./Customers";
import AdminManagement from "./AdminManagement";
import CustomerSupport from "./CustomerSupport";
import ReportsAndComplaints from "./ReportsAndComplaints";
import Subscriptions from "./Subscriptions";
import Settings from "./Settings";
import Advertisement from "./Advertisement";
import { GoPerson } from "react-icons/go";
import { SIDENAV_ITEMS } from "@/constants/sidebar_constants";
import SideBarMenuItems from "./sidebarmenuitems";
import { SideNavItem } from "@/types/types";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCreditCard1, CiWarning } from "react-icons/ci";

const Sidebar = () => {
  const SIDENAV_ITEMS: SideNavItem[] = [
    {
      title: "Summary",
      path: "/",
      icon: <RxDashboard size={27} />,
    },
    {
      title: "Admin Management",
      path: "/adminmanagement",
      icon: <GoPerson size={27} />,
    },
    {
      title: "Customers",
      path: "/customers",
      icon: <PiUsersThree size={27} />,
    },
    {
      title: "Customer Support",
      path: "/customersupport",
      icon: <IoChatbubblesOutline size={27} />,
    },
    {
      title: "Reports and complaints",
      path: "/reportsandcomplaints",
      icon: <CiWarning size={27} />,
    },
    {
      title: "Subscriptions",
      path: "/subscriptions",
      icon: <CiCreditCard1 size={27} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline size={27} />,
    },
    {
      title: "Advertisement",
      path: "/advertisement",
      icon: <PiBookOpenTextThin size={27} />,
    },
  ];

  return (
    <div className="flex">
      <div className="fixed w-[12.6rem] sm:w-[20rem] h-screen p-5 pt-8 text-white bg-black border-r-[1px] flex flex-col">
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

export default Sidebar;
