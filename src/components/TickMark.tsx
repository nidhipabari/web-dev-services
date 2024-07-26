import React from 'react';

const TickMark: React.FC = () => (
  <svg
    className="w-4 h-4 text-green-500 inline-block mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default TickMark;
