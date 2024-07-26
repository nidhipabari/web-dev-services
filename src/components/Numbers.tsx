import React from 'react';

const Numbers = () => {
  return (
    <div className='bg-[#3A0CA3] text-center p-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div>
        <h1 className='text-white font-bold text-4xl'>985</h1>
        <p className='text-[#FFFFFF]'>Projects Was Done</p>
      </div>
      <div>
        <h1 className='text-white font-bold text-4xl'>368</h1>
        <p className='text-[#FFFFFF]'>Personal Clients</p>
      </div>
      <div>
        <h1 className='text-white font-bold text-4xl'>39</h1>
        <p className='text-[#FFFFFF]'>Corporate Clients</p>
      </div>
      <div>
        <h1 className='text-white font-bold text-4xl'>15Y</h1>
        <p className='text-[#FFFFFF]'>Years Of Experience</p>
      </div>
    </div>
  );
};

export default Numbers;
