import React from 'react';

const Success = () => {
  return (
    <div className='text-center p-20 bg-[#F9F9F9]'>
      <p className="text-[#4361EE] font-bold">SUCCESS STORIES IN ONLINE GROWTH</p>
      <h1 className='text-4xl font-bold mt-4'>
        Hear from clients who've experienced<br />
        significant growth through our web solutions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4 md:px-40">
        <div className="border p-6 bg-white rounded-2xl">
          <i className='text-[#6E6E6E] font-bold'>
            “ Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor incididunt ut<br />
            labore “
          </i>
          <h3 className='font-bold mt-12'>Mr. John Doe</h3>
          <h2 className='text-[#4361EE] font-bold mt-4'>CLIENTS</h2>
        </div>
        <div className="border p-6 bg-white rounded-2xl">
          <i className='text-[#6E6E6E] font-bold'>
            “ Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor incididunt ut<br />
            labore “
          </i>
          <h3 className='font-bold mt-12'>Mr. John Doe</h3>
          <h2 className='text-[#4361EE] font-bold mt-4'>CLIENTS</h2>
        </div>
      </div>
    </div>
  );
};

export default Success;
