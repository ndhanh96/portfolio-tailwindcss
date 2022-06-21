import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <div className='hidden w-1/5 h-screen h-screen-mobile md:flex flex-col items-center text-sm lg:text-base text-neutral-100 text-shadow-sm bg-cyan-400 brightness-95 py-12 gap-12'>
      <div className='flex items-center justify-center h-24 w-24 lg:h-24 lg:w-24 rounded-full shadow-xl shadow-blue-800/80 bg-blue-400 overflow-hidden relative'>
        <Image src='/avatar.png' layout='fill' objectFit='cover' />
      </div>
      <div>
        <Link title='decription' href='#decription'>
          <a>About Me</a>
        </Link>
      </div>
      <div>
        <Link title='skills' href='#skills'>
          <a>Skills</a>
        </Link>
      </div>
      <div>
        <Link title='projects' href='#projects'>
          <a>Projects</a>
        </Link>
      </div>
      <div>
        <Link title='contact' href='#contact'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
