import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-center'>
      <div className='w-2/10 pl-15 py-15'>
        <img src="/next.svg" alt="logo" className='w-60'/>
      </div>
      <div className='w-3/10 flex flex-col pl-40 justify-center'>
        <div className='text-2xl'>Znajdziesz nas tutaj</div>
        <div>messenger</div>
        <div>instagram</div>
        <div>tiktok</div>
      </div>
      <div className='w-5/10 items-center flex justify-around pr-15'>
        <div className='justify-around flex flex-col'>
          <div className='text-lg text-center'>Zaufało nam</div>
          <div className='text-5xl text-fuchsia-700 text-center'>150</div>
          <div className='text-lg text-center'>uczniów</div>
        </div>
        <div className='justify-around flex flex-col'>
          <div className='text-lg text-center'>Stworzyliśmy</div>
          <div className='text-5xl text-fuchsia-700 text-center'>150</div>
          <div className='text-lg text-center'>kursów</div>
        </div>
        <div className='justify-around flex flex-col'>
          <div className='text-lg text-center'>Mamy bazę ponad</div>
          <div className='text-5xl text-fuchsia-700 text-center'>150</div>
          <div className='text-lg text-center'>zadań</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer