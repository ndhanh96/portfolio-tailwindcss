import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../components/Contact';
import Decription from '../components/Decription';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Decription />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
