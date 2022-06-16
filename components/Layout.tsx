import Head from 'next/head';
import React, { ReactNode } from 'react';
import SideBar from './SideBar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Portfolio | ndhanh96</title>
      </Head>
      <div className='flex w-full h-screen'>
        <SideBar />
        <main className='w-full overflow-auto'>{children}</main>
      </div>
    </>
  );
};
