import React from 'react';
import Button from './Button';
import Link from 'next/link';

const btnDark = {
  background: 'bg-blue-400', 
  color: 'text-slate-950', 
  name: 'Login', 
  type: 'text',
  paddingY: 'py-0.5',
  paddingX: 'px-2'
};

const btnLight = {
  background: 'bg-transparent', 
  color: 'text-white', 
  name: 'Register', 
  type: 'text',
  paddingY: 'py-0.5',
  paddingX: 'px-2'
};

const btnBuy = {
  background: 'bg-transparent', 
  color: 'text-white', 
  name: '🛒', 
  type: 'text',
  paddingY: 'py-0.5',
  paddingX: 'px-2'
};

function NavigationBar() {
  return (
    <nav className='flex justify-center items-center py-3.5 border-b-1 border-stone-800'>
      <div className='w-1/7'>
        <img src='/logo_basic.svg' alt="logo" className='w-25 pl-15'/>
      </div>
      <div className='flex items-baseline pr-40 pl-40 w-4/7 justify-around'>
        <Link href='/'>Home</Link>
        <Link href='/tasks'>Zadania</Link>
        <Link href='/courses'>Kursy</Link>
        <Link href='/tutor'>Korepetycje</Link>
        <Link href='/aboutUs'>O nas</Link>
      </div>
      <div className='flex items-baseline pr-20 pl-4 w-2/7 justify-around'>
        <Link href='/login'>
          <Button btnData={ btnDark }/>
        </Link>
        <Link href='/register'>
          <Button btnData={ btnLight }/></Link>
        <Link href='/cart'>
          <Button btnData={ btnBuy }/>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;