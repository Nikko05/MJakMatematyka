import React from 'react';
import Link from 'next/link';
import Button from './Button';

const btnDark = {
  background: 'bg-blue-400', 
  color: 'text-slate-950', 
  name: 'Login', 
  type: 'text'
}

const btnLight = {
  background: 'bg-transparent', 
  color: 'text-white', 
  name: 'Register', 
  type: 'text'
}

function NavigationBar() {
  return (
    <nav className='flex pt-5'>
      <div className='w-1/7'>
        <img src='/next.svg' alt="logo" className='w-40 pl-5'/>
      </div>
      <div className='flex items-baseline pr-40 pl-40 w-4/7 justify-around'>
        <Link href='/'>Home</Link>
        <Link href='/'>Zadania</Link>
        <Link href='/'>Kursy</Link>
        <Link href='/'>Korepetycje</Link>
        <Link href='/'>O nas</Link>
      </div>
      <div className='flex items-baseline pr-20 pl-4 w-2/7 justify-around'>
        <Button btnData={ btnDark }/>
        <Button btnData={ btnLight }/>
      </div>
    </nav>
  )
};

export default NavigationBar;