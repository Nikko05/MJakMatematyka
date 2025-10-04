'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type HrefsProps = {
  hrefsToLink: {
    hrefs: Array<any>;
  } 
}

export default function LinksForNav({hrefsToLink: { hrefs }}: HrefsProps ) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className='flex items-baseline pr-40 pl-40 w-4/7 justify-around'>
      {}
      <Link href='/'>Home</Link>
      <Link href='/courses'>Kursy</Link>
      <Link href='/tutor'>Korepetycje</Link>
      <Link href='/tasks'>Zadania</Link>
      <Link href='/aboutUs'>O nas</Link>
    </div>
  );
};
