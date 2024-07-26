import React from 'react';
import TickMark from './TickMark';

const PricingComponent: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] py-12">
      <div className="text-center mb-8">
        <h2 className="text-sm font-semibold text-[#4361EE]">OUR MEMBERSHIP PROGRAM INCLUDES A VARIETY OF SPECIAL EVENTS</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Explore Our Package For Development <br />Services To Boost Your Website</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Static Website</h3>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet</p>
          <div className="mt-6 text-3xl font-bold text-[#4361EE]">$7 <span className="text-base font-medium text-gray-600">/ Page</span></div>
          <ul className="mt-6 space-y-2">
            <li><TickMark />UI UX Design Research</li>
            <li><TickMark />Fast Loading</li>
            <li><TickMark />Google Index</li>
            <li><TickMark />SEO Optimized</li>
            <li><TickMark />Easy Payment</li>
          </ul>
          <button className="mt-6 bg-[#7209B7] text-white py-2 px-4 rounded-full">Get a Quote</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#7209B7]">
          <h3 className="text-xl font-semibold text-gray-900">Dynamic Website</h3>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet</p>
          <div className="mt-6 text-3xl font-bold text-[#4361EE]">$79 <span className="text-base font-medium text-gray-600">Start From</span></div>
          <ul className="mt-6 space-y-2">
            <li><TickMark />UI UX Design Research</li>
            <li><TickMark />Fast Loading</li>
            <li><TickMark />Google Index</li>
            <li><TickMark />SEO Optimized</li>
            <li><TickMark />Easy Payment</li>
          </ul>
          <button className="mt-6 bg-[#7209B7] text-white py-2 px-4 rounded-full">Get a Quote</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Custom Website</h3>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet</p>
          <div className="mt-6 text-3xl font-bold text-[#4361EE]">$149 <span className="text-base font-medium text-gray-600">Start From</span></div>
          <ul className="mt-6 space-y-2">
            <li><TickMark />UI UX Design Research</li>
            <li><TickMark />Fast Loading</li>
            <li><TickMark />Google Index</li>
            <li><TickMark />SEO Optimized</li>
            <li><TickMark />Easy Payment</li>
          </ul>
          <button className="mt-6 bg-[#7209B7] text-white py-2 px-4 rounded-full">Get a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;


