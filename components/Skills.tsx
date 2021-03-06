import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className='before:absolute before:h-screen before:h-screen-mobile before:w-full before:bg-green-600 before:blur-sm relative'>
      {/* <div className='h-screen w-full bg-green-600 blur-sm'></div> */}
      <div
        id='skills'
        className='w-full top-0 left-0 h-screen h-screen-mobile flex flex-col justify-center items-center gap-2  text-neutral-100 relative'
      >
        <h1
          style={{ textShadow: '3px 3px 3px black ' }}
          className='w-3/4 lg:w-auto text-3xl tracking-tight lg:tracking-normal lg:text-4xl text-neutral-200 font-thin selection:bg-orange-500'
        >
          So what do I <span className='font-semibold'>know</span> ?
        </h1>
        <div className='w-3/4 lg:w-2/3 text-lg lg:text-xl font-light text-shadow-sm selection:bg-indigo-700'>
          just like everyone new to the industry trying to get a job. I know the
          basic stuff but have no real experience. Things I know like:{' '}
          <span className='font-semibold'>
            ReactJs, Mysql, NextJs, Jquery, ExpressJS...
          </span>
          <br></br>
          I&apos;m currently rocking with NextJS every day for both frontend and
          backend. Using Prisma to query the database
          <br></br>
          <h3 className='py-1'>
            {' '}
            And I&apos;m <span className='font-semibold'>learning</span> to make
            a good looking website.
          </h3>
        </div>
        {/* BIG CHUNK OF SVG LOGO */}
        <div
          id='logo-skills'
          className='flex w-full justify-center items-center py-2 gap-3'
        >
          <div className=' w-14 h-12 lg:h-14 object-cover relative'>
            <Image title='reactjs' src='/reactjs.svg' layout='fill' />
          </div>
          <div className=' w-14 h-12 lg:h-14 object-cover relative'>
            <Image title='nextjs' src='/nextjs.svg' layout='fill' />
          </div>
          <div className=' w-12 h-12 lg:h-14 object-cover relative'>
            <Image title='expressjs' src='/express.svg' layout='fill' />
          </div>
          <div className=' w-14 h-12 lg:h-14 object-cover relative'>
            <Image title='mysql' src='/mysql.svg' layout='fill' />
          </div>
          <div className=' w-14 h-12 lg:h-14 object-cover relative'>
            <Image title='postgresql' src='/pgsql.svg' layout='fill' />
          </div>

          <div className=' w-14 h-12 lg:h-14 object-cover relative'>
            <Image title='tailwindcss' src='/tailwindcss.svg' layout='fill' />
          </div>
          <div className=' w-14 h-12 lg:h-14 object-cover relative'>
            <Image title='prisma-orm' src='/prisma.svg' layout='fill' />
          </div>
        </div>
        <div className='w-full text-center text-xs lg:text-base lg:font-medium text-shadow-sm selection:bg-red-600'>
          And I&apos;m always open to learning anything related to the web.
        </div>
      </div>
    </div>
  );
};

export default Skills;
