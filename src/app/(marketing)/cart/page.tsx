import React from 'react';
import Item from '@/app/ui/Item';

const itemToBuy = {
    item: {
      id: '123',
      name: 'Ułamki dziesiętne',
      level: 'Klasa 4',
      prize: 99,
      img: './logo_basic.svg', // if url, we need string
      difficulty: "Nic nie wiem"
    },
    amount: 1
  }

export default function Cart() {
  return (
    <div className='w-full'>
      <Item itemToBuy={itemToBuy}></Item>
      <Item itemToBuy={itemToBuy}></Item>
      <Item itemToBuy={itemToBuy}></Item>
    </div>
  );
};
