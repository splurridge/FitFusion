//IN CHARGE: DJEN

//STILL WORKING ON THIS

import { useState } from "react";
import {Link} from 'react-router-dom';
import Logo from "../assets/fitfusion.png";
import logout from "../assets/logout.png";
import profilePicture from "../assets/prfile.jpg";

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
        className="items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleSidebarToggle}
      >
        {/* Icon for opening sidebar */}
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          }`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="px-4 py-6">
            <a className="flex items-center mb-6">
              <img src={Logo} alt="Logo" className="h-8 mr-2" />
              <span className="text-xl font-semibold text-gray-800 dark:text-white">
                Fit Fusion
              </span>
            </a>

            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 group"
                >
                  <img
                    src={profilePicture} // Use the imported variable
                    alt="Profile Picture"
                    className="w-8 h-8 rounded-full mr-4" 
                  />
                  <span>My Profile</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 group"
                >
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800">
            {/* Logout section */}
            <Link to="/logout"
              href="#"
              className="flex items-center text-gray-800 dark:text-white"
            >
              <img src={logout} alt="Logout" className="h-6 mr-2" />
              <span className="text-sm font-semibold">Log Out</span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border border-gray-300 rounded-lg dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-900">
            Choose a Workout
          </h1>
        </div>
        <div className="mt-4">
        </div>
      </div>
    </>
  );
}

export default Sidebar;
