'use client'
import React, { useState, useEffect, use } from 'react';

type SelectProps = {
  selectData: {
    name: string,
    id: string,
    optionsAmount: number,
    options: Array<any>,

  };
};

export default function Select({selectData: {name, id, optionsAmount, options}}: SelectProps) {
  const [selected, setSelected] = useState<string>();

  return (
    <select name={name} id={id} value={selected} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelected(e.target.value)} className={`border-2 rounded-md px-3 py-1 ${selected ? 'opacity-100' : 'opacity-60'}`}>
      {options.map(({value, level}) => (
        <option key={value} value={value}>{level}</option>
      ))}
    </select>
  );
};
