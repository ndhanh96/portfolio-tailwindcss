import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className='before:absolute before:h-screen before:w-full before:bg-rose-500 before:blur-sm relative'>
      <div
        id='contact'
        className='h-screen w-full flex flex-col items-center justify-center space-y-4 relative'
      >
        <h1
          style={{ textShadow: '3px 4px 3px black' }}
          className='text-4xl font-thin text-neutral-200 selection:bg-teal-600 tracking-wide'
        >
          So you{' '}
          <span className=' before:absolute before:-inset-1 before:skew-y-3 before:bg-black relative inline-block'>
            <span
              style={{ textShadow: '2px 2px 3px pink' }}
              className='relative text-neutral-200'
            >
              interested
            </span>
          </span>
          ?
        </h1>
        <div className='flex flex-col lg:flex-row items-center lg:gap-2 text-shadow-sm text-lg text-neutral-200 selection:bg-emerald-700'>
          <p className=''>Reach me on</p>
          <div
            id='facebook'
            className='h-10 w-10 hover:cursor-pointer selection:bg-emerald-200 relative'
          >
            <Link href='https://fb.com/ndhanh96'>
              <Image src='/facebook.svg' layout='fill' />
            </Link>
          </div>
          <div
            id='linkedin'
            className='h-10 w-10 hover:cursor-pointer selection:bg-emerald-300 relative'
          >
            <Link href='https://www.linkedin.com/in/ndhanh96/'>
              <Image src='/linkedin.svg' layout='fill' />
            </Link>
          </div>
          <p className=''>or just email me:</p>
          <a
            className='text-yellow-300 underline'
            href='mailto:ndhanh96@gmail.com'
          >
            ndhanh96@gmail.com
          </a>
        </div>
        <div className='flex items-center h-14 absolute bottom-0 gap-2 text-white text-shadow-sm selection:bg-black'>
          <p className=''>Made with ❤️ by</p>
          <div className='w-10 h-10  relative'>
            <Image src='/nextjs.svg' layout='fill' objectFit='contain' />
          </div>
          <p className=''>and</p>
          <div className='w-10 h-5 relative'>
            <Image src='/tailwindcss.svg' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
