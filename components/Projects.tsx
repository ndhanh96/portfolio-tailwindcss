import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div className='relative'>
      <div className='h-screen w-full bg-yellow-300 blur'></div>
      <div
        id='projects'
        className='h-screen w-full flex flex-col items-center justify-center gap-10 absolute top-0 left-0'
      >
        <h1
          style={{ textShadow: '4px 4px 3px #F59B1B' }}
          className='text-4xl font-thin bg-fuchsia-500 selection:bg-green-900 text-white'
        >
          Here's what I did from what I learned
        </h1>
        <div className='flex w-full justify-between items-center px-10'>
          <div className='w-40 h-44 hover:cursor-pointer  relative'>
            <Link href='https://uniqlo-homepage-clone.vercel.app/'>
              <Image
                src='/uniqlo-homepage.jpeg'
                layout='fill'
                objectFit='contain'
              />
            </Link>
          </div>
          <div className='w-full h-full grid place-items-center bg-amber-400 shadow-md shadow-yellow-500'>
            <p className='mx-32 text-white bg-amber-600 p-10 selection:bg-blue-800'>
              A uniqlo homepage with fully responsive made with TaildwindCSS and
              NextJS. Everything from navbar, slider and notice message from the
              homepage.
            </p>
          </div>
        </div>
        <div className='flex w-full justify-between px-10  items-center'>
          <div className='w-40 h-44 relative  hover:cursor-pointer'>
            <Link href='https://todo-app-one-self.vercel.app/'>
              <Image src='/todos.jpeg' layout='fill' />
            </Link>
          </div>
          <div className='w-full h-full grid place-items-center bg-amber-400 shadow-md shadow-yellow-500'>
            <p className='mx-32 text-white bg-amber-600 p-10 selection:bg-cyan-600'>
              A todo list site which save your todos on Postgres database and
              will require you to login to add,edit,update,delete. You can login
              with email/passwords or login with your own googgle account
            </p>
          </div>
        </div>
        <div
          style={{ textShadow: '2px 2px 2px #F59B1B' }}
          className='flex gap-1 '
        >
          <p className=' text-zinc-800 '>And few others Jquery projects I made along the way:</p>
          <Link href='https://ndhanh96.github.io/JavaScript-Calculator/'>
            <a className='text-red-600'>Calculator</a>
          </Link>
          <Link href='https://ndhanh96.github.io/Tic-Tac-Toe-Game/'>
            <a className='text-blue-600'>Tic-tac-toe game</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
