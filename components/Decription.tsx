import React from 'react';

const Decription = () => {
  return (
    <div className='before:absolute before:h-screen before:h-screen-mobile before:w-full before:bg-blue-600 before:blur-sm relative'>
      {/* <div className='h-screen w-full bg-blue-600 blur-sm'></div> */}
      <div
        id='decription'
        className='flex flex-col h-screen h-screen-mobile justify-center items-center gap-2 relative'
      >
        <h1
          style={{ textShadow: '5px 4px 5px black ' }}
          className='w-3/4 lg:w-auto text-3xl lg:text-4xl text-neutral-200 font-thin font-sans selection:bg-pink-600'
        >
          Hi there, Welcome to my portfolio.
        </h1>
        <div
          // style={{ textShadow: '1px 2px 3px black' }}
          className='w-3/4 lg:w-2/3 text-neutral-100 text-lg lg:text-xl text-shadow-sm font-light tracking-wider selection:bg-yellow-500'
        >
          I&apos;m Hạnh, 26 years old. This is my portfolio page. I&apos;m
          currently <span className='font-semibold'>looking for a job</span>,
          and learning ReactJS, I live in{' '}
<<<<<<< HEAD
          <span className='font-semibold'>Ho Chi Minh</span> City. I like making
          websites and learning various things. I also practice my English in my
          free time.
=======
          <span className='font-semibold'>Ho Chi Minh</span> city, I like making
          website and learning to various things. I also practice my English in
          my freetime.
>>>>>>> 4d659dad94688db606b60c4f149958dccd1da36a
        </div>
      </div>
    </div>
  );
};

export default Decription;
