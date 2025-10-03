import React from 'react';
import Input from '@/app/ui/Input';
import Select from '@/app/ui/Select';

const level = {
  name: 'level',
  label: 'Wybierz klasę',
  placeholder: '',
  fontSize: 'text-base',
  paddingY: 'py-1.5',
  paddingX: 'px-2',
  type: 'checkbox'
}

const selectData = {
  name: 'level',
  id: 'level-select',
  optionsAmount: 6,
  options: [
    {
      value: '',
      level: '--wybierz klasę--',
    },
    {
      value: 'level4',
      level: 'Klasa 4',
    },
    {
      value: 'level5',
      level: 'Klasa 5',
    },
    {
      value: 'level6',
      level: 'Klasa 6',
    },
    {
      value: 'level7',
      level: 'Klasa 7',
    },
    {
      value: 'level8',
      level: 'Klasa 8',
    }
  ],
}

export default function Tasks() {
  return (
    <div className='flex flex-col w-full h-full'>
      {/* part with filters */}
      <div className='flex flex-row flex-wrap justify-around items-start h-1/4 w-full'>
        <Select selectData={selectData}></Select>
      </div>
      {/* part with tasks */}
      <div className=''>
        <div></div>
      </div>
      {/* <Input inputData={level}/> */}
    </div>
  );
};
