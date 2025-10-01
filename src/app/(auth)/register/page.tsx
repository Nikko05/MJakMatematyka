import React from 'react'
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Link from 'next/link';

const name = {
  name: 'name',
  label: 'Enter your name:',
  placeholder: 'John',
  fontSize: 'text-base',
  paddingY: 'py-1.5',
  paddingX: 'px-2'
};

const surname = {
  name: 'surname',
  label: 'Enter your surname:',
  placeholder: 'Walker',
  fontSize: 'text-base',
  paddingY: 'py-1.5',
  paddingX: 'px-2'
};

const login = {
  name: 'login',
  label: 'Enter your login:',
  placeholder: 'username@example.com',
  fontSize: 'text-base',
  paddingY: 'py-1.5',
  paddingX: 'px-2'
};

const password = {
  name: 'password',
  label: 'Enter your password:',
  placeholder: '***************',
  fontSize: 'text-base',
  paddingY: 'py-1',
  paddingX: 'px-2'
};

const passwordRepeat = {
  name: 'password',
  label: 'Enter your password again:',
  placeholder: '***************',
  fontSize: 'text-base',
  paddingY: 'py-1',
  paddingX: 'px-2'
};

const btnDark = {
  background: 'bg-blue-400', 
  color: 'text-slate-950', 
  name: 'Register', 
  type: 'text',
  paddingY: 'py-1',
  paddingX: 'px-2',
  width: 'w-full'
};

export default function Register() {
  return (
    <div className='flex justify-center items-center h-full w-full relative'>
      <Link href='/'>
        <img src="./returnLight.svg" alt="return" className='absolute top-5 left-5 h-10'/>
      </Link>
      <div className='w-1/3 h-4/5 border-1 rounded-md border-blue-100/10 flex flex-col justify-around items-center px-5 py-2'>
        <img src="./logo.svg" alt="logo" className='px-5 pt-3 h-2/9' />
        <div className='flex flex-col justify-around items-center'>
          {/* future** adding text based on cookies */}
          <h1 className='text-3xl font-bold'>Witaj po raz pierwszy!</h1>
          <div className='pt-2 px-10 text-center text-s'>Zdobywaj kursy i ćwicz zadania rejestrując się</div>
        </div>
        <Input loginInput={name}/>
        <Input loginInput={surname}/>
        <Input loginInput={login}/>
        <Input loginInput={password}/>
        <Input loginInput={passwordRepeat}/>
        <Button btnData={btnDark}/>
        <div className='text-xs'>Nie masz jeszcze konta? <Link href='/register' className='font-bold'>Zarejestruj się</Link></div>
      </div>
    </div>
  )
}
