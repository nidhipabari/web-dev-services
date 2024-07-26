import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="p-10 sm:p-20 bg-gradient-to-r from-purple-900 to-purple-300 flex flex-col items-center justify-center text-white">
      <div className="bg-white text-black rounded-3xl p-6 w-full max-w-6xl relative">
        <header className="flex  items-center">
          {/* Left Column */}
          <div className="flex ml-10 items-center">
            <span className="font-bold text-3xl">We<span className='text-[#7209B7]'>de</span></span>
          </div>
          
          {/* Right Column */}
          <div className="flex items-center justify-end space-x-4">
            {/* Hamburger Menu for Mobile */}
            <button 
              className="text-[#7209B7] font-bold py-2 px-4 rounded sm:hidden ml-80"
              onClick={toggleMenu}
            >
              ☰
            </button>
            {/* Navigation Links for Desktop */}
            <nav className="hidden sm:flex mt-4 sm:mt-0  space-x-8 font-semibold text-center sm:text-left">
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7] ml-32">HOME</a>
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7]">ABOUT US</a>
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7]">OUR SERVICES</a>
              <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7]">GALLERY</a>
            </nav>
            {/* 20% OFF Button */}
            <a 
              href="#" 
              className="bg-[#7209B7]  text-white font-bold py-3 px-6 rounded-full hidden sm:block"
            >
              20% OFF OFFER
            </a>
          </div>
        </header>
      </div>
      <main className="text-center py-10 sm:py-20 w-full max-w-5xl">
        <p className="mt-4 text-lg text-[#4CC9F0] font-bold">CRAFTING YOUR DIGITAL PRESENCE</p>
        <h1 className="text-3xl sm:text-5xl font-bold">Expert Website <span className="text-[#4CC9F0] underline">Development</span> <br /> Solutions For Business</h1>
        <button className="mt-8 bg-[#7209B7] text-white font-bold py-3 px-8 rounded-full">LEARN MORE</button>
      </main>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full bg-white text-black shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out sm:hidden w-3/4`}>
        <button 
          className="text-[#7209B7] font-bold py-2 px-4 rounded absolute top-4 left-4"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <nav className="flex flex-col items-start mt-16 ml-4 space-y-6">
          <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7] text-xl">HOME</a>
          <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7] text-xl">ABOUT US</a>
          <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7] text-xl">OUR SERVICES</a>
          <a href="#" className="text-[#6E6E6E] hover:text-[#7209B7] text-xl">GALLERY</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;





