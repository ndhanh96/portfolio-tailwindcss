import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div
        id='projects'
        className='flex flex-col justify-center items-center h-screen gap-10 mx-20'
      >
        <h1 className='text-2xl'>Here's what I did with my knowledges</h1>
        <div className='flex w-4/5 justify-between bg-yellow-200 items-center'>
          <div className='w-40 h-44 hover:cursor-pointer relative'>
            <Link href='https://uniqlo-homepage-clone.vercel.app/'>
              <Image
                src='/uniqlo-homepage.jpeg'
                layout='fill'
                objectFit='contain'
              />
            </Link>
          </div>
          <div className='w-2/3 '>
            A uniqlo homepage with fully responsive made with TaildwindCSS and
            NextJS
          </div>
        </div>
        <div className='flex w-4/5 justify-between bg-yellow-200 items-center'>
          <div className='w-40 h-44 relative hover:cursor-pointer'>
            <Link href='https://todo-app-one-self.vercel.app/'>
              <Image src='/todos.jpeg' layout='fill' />
            </Link>
          </div>
          <div className='w-2/3'>
            A todo list site which save your todos on Postgres database and will
            require you to login to add,edit,update,delete. You can login with
            email/passwords or login with your own googgle account
          </div>
        </div>
        <div className='flex gap-1'>
          <p>And few others Jquery projects I made along the way:</p>
          <Link href='https://ndhanh96.github.io/JavaScript-Calculator/'>
            <a className='text-red-600'>Calculator</a>
          </Link>
          <Link href='https://ndhanh96.github.io/Tic-Tac-Toe-Game/'>
            <a className='text-blue-600'>Tic-tac-toe game</a>
          </Link>
        </div>
      </div>
  )
}

export default Projects