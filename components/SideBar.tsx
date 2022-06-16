import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <div className='hidden md:flex flex-col items-center w-1/5 h-screen bg-blue-200 py-12 gap-12'>
      <div className='flex items-center justify-center h-32 w-32 rounded-full overflow-hidden bg-orange-300 relative'>
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
