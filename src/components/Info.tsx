import React from 'react';

const Info = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#F9F9F9] p-10'>
      <div className='bg-gray-400 h-96 w-full md:w-96 rounded-md m-20 mx-auto md:mx-0'></div>
      <div className='ml-0 md:ml-20'>
        <p className="text-[#4361EE] font-bold text-center md:text-left">YOUR PARTNER IN DIGITAL INNOVATION</p>
        <h1 className='text-3xl md:text-4xl font-bold text-center md:text-left'>Discover our range of web<br />development services</h1>
        <p className='mt-5 text-sm text-[#6E6E6E] text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          <div className="border p-6 bg-white rounded-2xl">
            <h4 className="font-semibold text-center text-xl">Web Framework</h4>
            <p className="text-center text-[#68727D] mt-3">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
          </div>
          <div className="border p-6 bg-white rounded-2xl">
            <h4 className="font-semibold text-center text-xl">Business Website</h4>
            <p className="text-center text-[#68727D] mt-3">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
          </div>
          <div className="border p-6 bg-white rounded-2xl">
            <h4 className="font-semibold text-center text-xl">eCommerce Web</h4>
            <p className="text-center text-[#68727D] mt-3">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
          </div>
          <div className="border p-6 bg-white rounded-2xl">
            <h4 className="font-semibold text-center text-xl">Point Of Sales</h4>
            <p className="text-center text-[#68727D] mt-3">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#7209B7] text-white text-sm px-10 py-3 rounded-full mb-4 md:mb-0">ALL SERVICES</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
