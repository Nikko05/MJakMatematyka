import React from 'react'
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Link from 'next/link';

const login = {
  name: 'login',
  label: 'Enter your login:',
  placeholder: 'username@example.com',
  fontSize: 'text-base',
  paddingY: 'py-1.5',
  paddingX: 'px-2'
}

const password = {
  name: 'password',
  label: 'Enter your password:',
  placeholder: '***************',
  fontSize: 'text-base',
  paddingY: 'py-1',
  paddingX: 'px-2'
}

const btnDark = {
  background: 'bg-blue-400', 
  color: 'text-slate-950', 
  name: 'Login', 
  type: 'text',
  paddingY: 'py-1',
  paddingX: 'px-2',
  width: 'w-full'
};

export default function Login() {
  return (
    <div className='flex justify-center items-center h-full w-full relative'>
      <Link href='/'>
        <img src="./returnLight.svg" alt="return" className='absolute top-5 left-5 h-10'/>
      </Link>
      <div className='w-1/3 h-2/3 border-1 rounded-md border-blue-100/10 flex flex-col justify-around items-center p-5'>
        <img src="./logo.svg" alt="logo" className='px-5 pt-3 h-2/7' />
        <div className='flex flex-col justify-around items-center'>
          {/* future** adding text based on cookies */}
          <h1 className='text-3xl font-bold'>Witaj ponownie!</h1>
          <div className='pt-2 px-10 text-center'>Korzystaj ze swoich kursów i pakietów logując się!</div>
        </div>
        <Input loginInput={login}/>
        <Input loginInput={password}/>
        <Button btnData={btnDark}/>
        <div className='text-xs'>Nie masz jeszcze konta? <Link href='/register' className='font-bold'>Zarejestruj się</Link></div>
      </div>
    </div>
  )
}
