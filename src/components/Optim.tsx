import React from 'react';

const Optim = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#F9F9F9] p-10 gap-10'>
      <div className='bg-gray-400 h-96 w-full rounded-md m-20 md:m-0'></div>
      <div className='ml-0 md:ml-20'>
        <p className="text-[#4361EE] font-bold">OPTIMIZING USER EXPERIENCE ACROSS DEVICES</p>
        <h1 className='text-4xl font-bold'>Services focused on responsive <br /> design and seamless Experience</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-12 gap-6'>
          <div className='bg-[#4361EE] rounded-3xl p-10 text-white text-sm'>
            <p>Sed ut perspiciatis unde omnis iste<br /> natus error sit voluptatem<br /> accusantium doloremque<br /> laudantium.<br />
              Totam rem aperiam, eaque ipsa quae<br /> ab illo inventore veritatis et quasi<br /> architecto beatae vitae dicta</p>
          </div>
          <div className='p-10'>
            <h1 className='text-md font-bold'>Good UI Design</h1>
            <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet</p>
            <h1 className='text-md font-bold mt-4'>Seamless User Experience</h1>
            <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet</p>
            <h1 className='text-md font-bold mt-4'>Fast Loading Website</h1>
            <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optim;
