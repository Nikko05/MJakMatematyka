import React from 'react';
import Button from './Button';
import Link from 'next/link';

const btnDark = {
  background: 'bg-blue-400', 
  color: 'text-slate-950', 
  name: 'Login', 
  type: 'text'
};

const btnLight = {
  background: 'bg-transparent', 
  color: 'text-white', 
  name: 'Register', 
  type: 'text'
};

const btnBuy = {
  background: 'bg-transparent', 
  color: 'text-white', 
  name: '🛒', 
  type: 'text'
};

function NavigationBar() {
  return (
    <nav className='flex pt-5 pb-3 border-b-1 border-stone-800'>
      <div className='w-1/7'>
        <img src='/next.svg' alt="logo" className='w-40 pl-5'/>
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