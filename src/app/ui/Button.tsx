import React from 'react'

function Button({ btnData } : { btnData : { background: string, color: string, name: string, type: string }}) {
  return (
    <button className={`${btnData.background} ${btnData.color} ${btnData.name} ${btnData.type} border-blue-400 rounded-lg border-2 pl-5 pr-5 pt-0.5 pb-0.5`}>{btnData.name}</button>
  )
}

export default Button