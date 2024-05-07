'use client'
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';

const PageWrapper = ({ children }: { children: ReactNode }) => {

    // const { toggleCollapse  } = useSideBarToggle();
    const pageStyle = classNames('bg-gray-100 grow text-black px-4 mt-3 pl-[12.6rem] sm:pl-[20rem]')
  return (
    <div className={pageStyle}>
        {children}
    </div>
  )
}

export default PageWrapper