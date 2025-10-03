import React from 'react';
import Select from '@/app/ui/Select';

const selectData = {
  name: 'level',
  id: 'level-select',
  optionsAmount: 6,
  options: [
    {
      value: '',
      level: '--wybierz godzinę--',
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

export default function Tutor() {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='h-1/5 w-full'>
        <h1 className='text-center text-3xl font-bold'>Zarezerwuj swoje kolejne zajęcia</h1>
      </div>
      <div className='h-3/5 w-full'>
        {/* adding calendar with dates with available days */}
      </div>
      {/* adding input with free hours in selected day*/}
      <div className='flex h-1/5 w-full justify-center items-center'>
        <Select selectData={selectData}></Select>
      </div>
    </div>
  );
};