import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className='relative'>
      <div className='h-screen w-full bg-green-600 blur-sm'></div>
      <div
        id='skills'
        className='w-full absolute top-0 left-0 h-screen flex flex-col justify-center items-center gap-2  text-neutral-100 '
      >
        <h1
          style={{ textShadow: '3px 3px 3px black ' }}
          className='w-3/4 lg:w-auto text-3xl lg:text-4xl text-neutral-200 font-thin selection:bg-orange-500'
        >
          So what do I <span className='font-semibold'>know</span> ?
        </h1>
        <div className='w-3/4 text-lg lg:text-xl font-light text-shadow-sm selection:bg-indigo-700'>
          Just like everyone new to industry trying to get a job. I know basic
          stuff but no real experiences. Things I know like:{' '}
          <span className='font-semibold'>
            ReactJs, Mysql, NextJs, Jquery, ExpressJS...
          </span>
          <br></br>
          I'm currently rocking with NextJS everyday for both frontend and
          backend. Using Prisma to query from database.
          <br></br>
          <h3 className='py-1'>
            {' '}
            And <span className='font-semibold'>learning</span> to make a good
            looking website.
          </h3>
        </div>
        {/* BIG CHUNK OF SVG LOGO */}
        <div id='logo-skills' className='flex w-full justify-center items-center py-2 gap-3'>
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
        <div className='lg:font-medium tracking-tight lg:tracking-normal text-shadow-sm selection:bg-red-600'>
          And I'm always open to learn anything related to web.
        </div>
      </div>
    </div>
  );
};

export default Skills;
