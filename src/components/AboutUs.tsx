import React from 'react';

const AboutUs = () => {
  return (
    <section className="text-left py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="md:ml-32 text-center md:text-left">
          <p className="text-[#4361EE] mb-4 font-bold">ABOUT US</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Web Development <br />Services To Enhance Your<br />Online Presence
          </h2>
          <h6 className="mb-10 mt-10 text-[#68727D] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h6>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6 items-center md:items-start justify-center md:justify-start">
            <button className="bg-[#7209B7] text-white text-sm px-10 py-3 rounded-full mb-4 md:mb-0">
              DISCOVER US
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Add any additional content for the right side here */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
