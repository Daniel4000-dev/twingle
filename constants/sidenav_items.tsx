import { SideNavItem } from "@/types/types";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCreditCard1, CiWarning } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { PiBookOpenTextThin, PiUsersThree } from "react-icons/pi";

export const SIDENAV_ITEMS: SideNavItem[] = [
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