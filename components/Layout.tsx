import React, { ReactNode } from 'react';
import SideBar from './SideBar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex w-full h-screen'>
      <SideBar />
      <main className='w-full overflow-auto'>{children}</main>
    </div>
  );
};
