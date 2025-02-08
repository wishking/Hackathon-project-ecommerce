import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (

<>



    <div className="flex flex-col items-center p-4 md:p-8">
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">GET In Touch with Us</h1>
      <p className="text-center mb-8 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate volupta<br />
        rem debitis autem libero quisquam.
      </p>

      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row p-6 rounded-lg">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <img
                src="/img/icon8.png" // Replace with your icon path
                alt="Address Icon"
                className="text-indigo-500 mr-3 mt-1 w-5 h-5"
              />
              <div>
                <strong>Address</strong>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
            <div className="flex items-start">
              <img
                src="/img/icon9.png" // Replace with your icon path
                alt="Phone Icon"
                className="text-green-500 mr-3 mt-1 w-5 h-5"
              />
              <div>
                <strong>Phone Number:</strong>
                <p>+1 (234) 567-8901</p>
                <p>+1 (234) 567-8901</p>
              </div>
            </div>
            <div className="flex items-start">
              <img
                src="/img/icon7.png" // Replace with your icon path
                alt="Clock Icon"
                className="text-yellow-500 mr-3 mt-1 w-5 h-5"
              />
              <div>
                <strong>Working Time:</strong>
                <p>Mon-Fri, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="flex flex-col space-y-4">
            <div>
              <label className="block mb-2 font-bold">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Subject (Optional)</label>
              <input
                type="text"
                placeholder="Enter the Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-500 px-8 py-2 mt-6 text-xl text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      
    </div>
    </>

  );
}
