import { difference } from 'next/dist/build/utils';
import React from 'react';

type ItemProps = {
  itemToBuy: {
    item: {
      id: string,
      name: string,
      level: string,
      prize: number,
      img: string, // if image, not url HTMLImageElement
      difficulty: string
    },
    amount: number
  }
}

export default function Item({itemToBuy: {item: {id, name, level, prize, img, difficulty}, amount}}: ItemProps) {

  return (
    <div className='flex w-full border-b-1 border-blue-200 justify-start items-center pb-1.5 pt-3'>
      <div className='w-1/10 flex justify-center items-center'>
        <img src={img} alt="item photo" />
      </div>
      <div className='w-8/10'>
        <div className='flex flex-row'>
          <div className='text-2xl font-bold'>{name}</div>
        </div>
        <div className='flex flex-row'>
          <div className='text-sm opacity-80 pr-10'>{level}</div>
          <div className='text-sm opacity-80'>{difficulty}</div>
        </div>
      </div>
      <div className='w-1/10 text-center'>
        {prize} PLN
      </div>
    </div>
  );
};
