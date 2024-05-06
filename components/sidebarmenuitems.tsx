'use client'
import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarMenuItems = ({menuItem} : {menuItem: SideNavItem}) => {
    const currentRoute = usePathname();

    const activeLink = 'text-gray-50 p-2 bg-gray-800 opacity-4 rounded-lg';
    const inactiveLink = 'text-gray-400 p-2';

    return (
        <div className='flex flex-col mt-2'>
            <Link  href={menuItem.path} className ={`${currentRoute === menuItem.path ? activeLink : inactiveLink}`}>
                <div className='flex items-center gap-2 p-2'>
                    {menuItem.icon}
                    <h2 className='text-xl font-sans'>{menuItem.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default SideBarMenuItems