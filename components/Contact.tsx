import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div
      id='contact'
      className='h-screen flex flex-col items-center justify-center space-y-2 relative'
    >
      <h1>So you interested ?</h1>
      <div className='flex items-center gap-3'>
        <p className='text-lg'>Reach me on</p>
        <div id='facebook' className='h-10 w-10 hover:cursor-pointer relative'>
          <Link href='https://fb.com/ndhanh96'>
            <Image src='/facebook.svg' layout='fill' />
          </Link>
        </div>
        <div id='linkedin' className='h-10 w-10 hover:cursor-pointer relative'>
          <Link href='https://www.linkedin.com/in/ndhanh96/'>
            <Image src='/linkedin.svg' layout='fill' />
          </Link>
        </div>
        <p>or just email me:</p>
        <a href='mailto:ndhanh96@gmail.com'>ndhanh96@gmail.com</a>
      </div>
      <div className='flex items-center h-14 absolute bottom-0 gap-2'>
        <p>Made with ❤️ by</p>
        <div className='w-10 h-10 relative'>
          <Image src='/nextjs.svg' layout='fill' objectFit='contain' />
        </div>
        <p>and</p>
        <div className='w-10 h-5 relative'>
          <Image src='/tailwindcss.svg' layout='fill' objectFit='contain' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
