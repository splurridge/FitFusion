import React from 'react';
import { Link } from 'react-router-dom';

function DropdownComponent() {
  const handleDropdownToggle = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
  };

  return (
    <div
      id="dropdown"
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-white dark:border-gray-700"
      style={{
        minWidth: '3in',
        maxWidth: '4 in',
        minHeight: '2in',
        maxHeight: '3in',
      }}
    >
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Trainer Name</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Expertise</span>
        <div className="flex mt-4 md:mt-6">
          <Link to="/addtrainer">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DropdownComponent;
