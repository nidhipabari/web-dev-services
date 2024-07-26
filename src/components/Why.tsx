import React from 'react';

const Why = () => {
  return (
    <div className='p-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-gray-400 h-96 w-full rounded-md mx-auto md:m-20'></div>
        <div className='md:ml-20'>
          <p className="text-[#4361EE] font-bold">WHY CHOOSE US</p>
          <h1 className='text-4xl font-bold mt-4'>
            We Always Maximize <br />
            Your Online Reach With <br />
            Website Services
          </h1>
          <p className='mt-5 text-sm text-[#6E6E6E]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
            labore et dolore magna aliqua.
          </p>
          <div className='mt-12'>
            <div>
              <h1 className='text-md font-bold'>Fast Loading Website</h1>
              <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <h1 className='text-md font-bold mt-4'>SEO Optimized</h1>
              <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <h1 className='text-md font-bold mt-4'>100% Money Back Guarantee</h1>
              <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
