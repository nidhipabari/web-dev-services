import React from 'react';

const FooterPartOne = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10  bg-[#3A0CA3] text-white'>
      <div className='text-left'>
        <h1 className='font-bold text-3xl'>We<span className='text-[#4CC9F0]'>de</span></h1>
        <p className='mt-4 text-[#FFFFFF]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
      </div>
      <div>
        <h1 className='font-bold text-xl'>Quick Links</h1>
        <p className='mt-3'>Home</p>
        <p className='mt-3'>About us</p>
        <p className='mt-3'>Our Team Work</p>
        <p className='mt-3'>Services</p>
        <p className='mt-3'>Work Gallery</p>
      </div>
      <div>
        <h1 className='font-bold text-xl'>Site Links</h1>
        <p className='mt-3'>Privacy Policy</p>
        <p className='mt-3'>Disclaimer</p>
        <p className='mt-3'>Terms & Condition</p>
        <p className='mt-3'>GDPR</p>
        <p className='mt-3'>Cookies Used</p>
      </div>
      <div>
        <h1 className='font-bold text-xl'>Stay Tuned With Us</h1>
        <p className='mt-3'>
          Gresik United East Java<br />Nggepeng Village 6312
        </p>
        <p className='mt-3'>
          Hello@Email.com
        </p>
        <p className='mt-3'>(+62) 123 456 789</p>
      </div>
    </div>
  );
};

export default FooterPartOne;
