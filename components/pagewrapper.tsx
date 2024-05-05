'use client'
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';

const PageWrapper = ({ children }: { children: ReactNode }) => {

    // const { toggleCollapse  } = useSideBarToggle();
    const pageStyle = classNames('bg-gray-100 grow text-black p-2 mt-16 pl[20rem]')
  return (
    <div className={pageStyle}>
        {children}
    </div>
  )
}

export default PageWrapper