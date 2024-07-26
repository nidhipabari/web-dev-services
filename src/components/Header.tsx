import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="p-10 sm:p-20 bg-gradient-to-r from-purple-900 to-purple-300 flex flex-col items-center justify-center text-white">
      <div className="bg-white text-black rounded-3xl p-6 w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center">
            <span className="font-bold text-3xl">We<span className='text-[#7209B7]'>de</span></span>
            <nav className="mt-4 sm:mt-0 sm:ml-40 space-x-8 font-semibold text-center sm:text-left">
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7]">HOME</a>
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7]">ABOUT US</a>
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7]">OUR SERVICES</a>
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7]">GALLERY</a>
            </nav>
          </div>
          <div className="mt-4 sm:mt-0 space-x-4">
            <a href="#" className="bg-[#7209B7] text-white font-bold py-3 px-6 rounded-full">20% OFF OFFER</a>
            <button className="text-[#7209B7] font-bold py-2 px-4 rounded">☰</button>
          </div>
        </header>
      </div>
      <main className="text-center py-10 sm:py-20 w-full max-w-5xl">
        <p className="mt-4 text-lg text-[#4CC9F0] font-bold">CRAFTING YOUR DIGITAL PRESENCE</p>
        <h1 className="text-3xl sm:text-5xl font-bold">Expert Website <span className="text-[#4CC9F0] underline">Development</span> <br /> Solutions For Business</h1>
        <button className="mt-8 bg-[#7209B7] text-white font-bold py-3 px-8 rounded-full">LEARN MORE</button>
      </main>
    </div>
  );
};

export default Header;


