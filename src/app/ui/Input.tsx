import React from 'react'

export default function Input({loginInput}: {loginInput: {name: string, placeholder: string, paddingY:string, paddingX:string, fontSize?:string, label: string}}) {
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={loginInput.name} className='text-sm pb-1'>
        <span>{loginInput.label}</span>
      </label>
      <input type="text" className={`border-1 rounded-md border-blue-100/10 bg-blue-50/5 opacity-80 w-full ${loginInput.paddingY} ${loginInput.paddingX} ${loginInput.fontSize}`} placeholder={loginInput.placeholder}/>
    </div>
  )
}
