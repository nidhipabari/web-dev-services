import React, { useState } from 'react';

const StayTuned = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
    // You can add form submission logic here (e.g., send data to server)
  };

  return (
    <div className='bg-[#F9F9F9] grid grid-cols-1 md:grid-cols-2'>
      <div className="text-left py-20">
        <div className="container mx-auto px-4">
          <div className="md:ml-32 text-center md:text-left">
            <p className="text-[#4361EE] mb-4 font-bold">STAY TUNED WITH US</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Keep In Touch With Our <br />Professional Team
            </h2>
            <h6 className="mb-10 mt-10 text-[#68727D] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h2 className='font-bold'>Head Office</h2>
                <p>Gresik United East Java</p>
              </div>
              <div>
                <h2 className='font-bold'>Secondary Office</h2>
                <p>Jakarta Indonesia</p>
              </div>
              <div>
                <h2 className='font-bold mt-3'>Email Address</h2>
                <p>Hello@Email.co</p>
              </div>
              <div>
                <h2 className='font-bold mt-3'>Telephone</h2>
                <p>+62 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto p-4 sm:p-6 rounded-lg shadow-md bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="font-bold">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="font-bold">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="font-bold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="font-bold">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-bold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="bg-[#F9F9F9] px-4 py-2 rounded-lg w-full focus:outline-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#7209B7] text-white px-6 sm:px-10 py-2 sm:py-3 text-sm rounded-full"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayTuned;


