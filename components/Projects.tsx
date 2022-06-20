import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div className='before:h-screen before:absolute before:top-0 before:left-0 before:w-full before:bg-yellow-300 before:blur-sm relative'>
      <div
        id='projects'
        className='h-screen w-full flex flex-col items-center justify-center gap-10 relative'
      >
        <h1
          style={{ textShadow: '4px 4px 3px #F59B1B' }}
          className='text-3xl lg:text-4xl font-thin bg-green-900  selection:bg-fuchsia-500 text-white'
        >
          Here&apos;s what I did from what I learned
        </h1>
        <div className='flex w-full justify-between items-center px-4 lg:px-10'>
          <div className='w-40 h-44 hover:cursor-pointer relative'>
            <Link href='https://uniqlo-homepage-clone.vercel.app/'>
              <Image
                src='/uniqlo-homepage.jpeg'
                layout='fill'
                objectFit='contain'
              />
            </Link>
          </div>
          <div className='w-full h-full grid place-items-center bg-amber-400 shadow-md shadow-yellow-500'>
            <p className='mx-4 lg:mx-32 text-sm lg:text-base text-white text-shadow-sm bg-amber-600 p-2 lg:p-10 selection:bg-blue-800'>
              A uniqlo homepage with fully responsive made with TaildwindCSS and
              NextJS. Everything from navbar, slider and notice message from the
              homepage.
            </p>
          </div>
        </div>
        <div className='flex w-full justify-between items-center px-4 lg:px-10'>
          <div className='w-40 h-44 relative  hover:cursor-pointer'>
            <Link href='https://todo-app-one-self.vercel.app/'>
              <Image src='/todos.jpeg' layout='fill' />
            </Link>
          </div>
          <div className='w-full h-full grid place-items-center bg-amber-400 shadow-md shadow-yellow-500'>
            <p className='mx-4 lg:mx-32 text-sm lg:text-base text-white text-shadow-sm bg-amber-600 p-2 lg:p-10 selection:bg-cyan-600'>
              A todo list site which save your todos on Postgres database and
              will require you to login to add, edit, update, delete. You can
              login with email/passwords or login with your own google account
            </p>
          </div>
        </div>
        <div
          style={{ textShadow: '2px 2px 2px #F59B1B' }}
          className='flex gap-2 lg:gap-1 text-xs lg:text-base '
        >
          <p className=' text-zinc-800 '>
            And check out my github:
            <span>
              <Link href='https://github.com/ndhanh96'>
                <a className='text-red-600'>Github</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
