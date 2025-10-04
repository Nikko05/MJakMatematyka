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
    // getting hours from api
    {
      value: 'level4',
      level: 'Klasa 4',
    },
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