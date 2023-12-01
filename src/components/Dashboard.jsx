import React, { useState } from 'react';
import Trainer from './Trainer'

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleSidebarToggle}
      >
        {/* Icon for opening sidebar */}
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed bottom-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between bg-gray-50 dark:bg-gray-800">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <a className="flex items-center ps-2.5 mb-5">
            <img
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Fit Fussion
              </span>
            </a>

            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Profile Icon */}
                  {<h1>Profile</h1>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Notifications Icon */}
                  {<h1>Bookings</h1>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Inbox Icon */}
                  {<h1>Inbox</h1>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Notifications Icon */}
                  {<h1>Notification</h1>}
                </a>
              </li>
            </ul>
          </div>

          <div className="px-3 py-4">
            {/* Logo at the bottom */}
            <a className="flex items-center">
              <img
              />
              <span className="text-sm font-semibold whitespace-nowrap dark:text-white">
                Log Out
              </span>
            </a>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {<span className="text-xl font-bold whitespace-nowrap dark:text-gray-900 ">
                Step 1:  
              </span>}
              <span> </span>
              <span className="text-md font-bold whitespace-nowrap dark:text-gray-900 ">
                Book your trainer
              </span>
        </div>

        <Trainer />
      </div>
    </>
  );
}

export default Sidebar;
