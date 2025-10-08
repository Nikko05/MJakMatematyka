import React from 'react';
import Select from '@/app/ui/Select';
import PricingCard from '@/app/ui/PricingCard';

const selectData = {
  label: 'Wybierz godzinę',
  name: 'hours',
  id: 'hours-select',
  optionsAmount: 10,
  options: [
    {
      value: '',
      level: '--wybierz godzinę--',
    },
    // getting hours from api
    {
      value: '1600',
      level: '16:00',
    },
  ],
}

// pricing !!!!!!!!

export default function Tutor() {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='h-full w-full flex justify-around pb-5'>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
        <PricingCard></PricingCard>
      </div>
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