import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div
      id='skills'
      className='h-screen flex flex-col justify-center items-center gap-2'
    >
      <h1 className='text-3xl '>So what do I know ?</h1>
      <div className='w-2/3'>
        Just like everyone new to industry trying to get a job. I know basic
        stuff but no real experiences. Things I know like: ReactJs, Mysql,
        NextJs, Jquery, ExpressJS...
        <br></br>
        I'm currently rocking with NextJS everyday for both frontend and
        backend. Using Prisma to query from database.
        <br></br>
        <h3 className='py-1'>
          {' '}
          And learning to make a good looking website.
        </h3>
      </div>

      <div id='logo-skills' className='flex items-center py-2 gap-3'>
        <div className=' w-14 h-14 object-cover relative'>
          <Image title='reactjs' src='/reactjs.svg' layout='fill' />
        </div>
        <div className=' w-14 h-14 object-cover relative'>
          <Image title='nextjs' src='/nextjs.svg' layout='fill' />
        </div>
        <div className=' w-12 h-12 object-cover relative'>
          <Image title='expressjs' src='/express.svg' layout='fill' />
        </div>
        <div className=' w-14 h-14 object-cover relative'>
          <Image title='mysql' src='/mysql.svg' layout='fill' />
        </div>
        <div className=' w-14 h-14 object-cover relative'>
          <Image title='postgresql' src='/pgsql.svg' layout='fill' />
        </div>

        <div className=' w-14 h-14 object-cover relative'>
          <Image title='tailwindcss' src='/tailwindcss.svg' layout='fill' />
        </div>
        <div className=' w-14 h-14 object-cover relative'>
          <Image title='prisma-orm' src='/prisma.svg' layout='fill' />
        </div>
      </div>
      <div>And I'm always open to learn anything related to web.</div>
    </div>
  );
};

export default Skills;
