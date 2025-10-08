import React from 'react';

function Footer() {
  return (
    <footer className='flex justify-center border-t-1 border-stone-800 px-10'>
      <div className='w-2/10 flex py-5 justify-center items-center'>
        <img src="/logo.svg" alt="logo" className='h-35'/>
      </div>
      <div className='w-3/10 flex flex-col justify-center items-center'>
        <div>
          <div className='text-2xl'>Znajdziesz nas tutaj</div>
          <a className='flex py-0.5 cursor-pointer'>
            <img src="./facebook.svg" alt="facebook logo" className='pr-2'/>
            <div>
              Facebook
            </div>
          </a>
          <a className='flex py-0.5 cursor-pointer'>
            <img src="./instagram.svg" alt="instagram logo" className='pr-2'/>
            <div>
              Instagram
            </div>
          </a>
          <a className='flex py-0.5 cursor-pointer'>
            <img src="./tiktok.svg" alt="tiktok logo" className='pr-2'/>
            TikTok
          </a>
        </div>
      </div>
      <div className='w-5/10 items-center flex justify-around'>
      {/* making component with this dives and generate using data from api **future and other component */}
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
  );
};

export default Footer;