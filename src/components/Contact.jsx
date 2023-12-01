import React from 'react';

function Contact() {
  return (
    <div className="flex h-screen text-gray-900">
      <div className="bg-white w-1/2 justify-left p-10">
        <div>
          <h1 className="text-8xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-justify">
            Feel free to reach out to us for any inquiries or assistance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className=" flex items-center mb-4">
            <img src="path/to/email-icon.png" alt="Email Icon" className="w-8 h-8 mr-2" />
            <p className="text-lg">info@example.com</p>
          </div>
          <div className="flex items-center">
            <img src="path/to/phone-icon.png" alt="Phone Icon" className="w-8 h-8 mr-2" />
            <p className="text-lg">+1 (123) 456-7890</p>
          </div>
    </div>
  );
}

export default Contact;
