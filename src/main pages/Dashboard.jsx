//IN CHARGE: DJEN

//STILL WORKING ON THIS

import { useState } from "react";
import {Link} from 'react-router-dom';
import Logo from "../assets/fitfusion.png";
import logout from "../assets/logout.png";
import profilePicture from "../assets/prfile.jpg";
import Trainer from "./../components/Trainer"

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    intensity: '',
    frequency: '',
    duration: '',
  });

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const intensityOptions = ['Easy', 'Moderate', 'Hard'];
  const frequencyOptions = ['3', '4', '5', '6', '7'];
  const durationOptions = ['5', '10', '15', '20', '25', '30'];

  const handleSelectChange = (event, field) => {
    setSelectedOptions({
      ...selectedOptions,
      [field]: event.target.value,
    });
  };

  const scrollToEnrolledClasses = () => {
    const enrolledClassesDiv = document.getElementById('enrolledclass');
    if (enrolledClassesDiv) {
      enrolledClassesDiv.scrollIntoView({ behavior: 'smooth' });
    }
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
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={scrollToEnrolledClasses}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* Notifications Icon */}
                  <h1>Enrolled Classes</h1>
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800">
            {/* Logout section */}
            <Link to="/login"
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
          <div className="flex items-center space-x-4">
            <div className="w-1/3">
              <label htmlFor="intensity" className="mr-2">
                <strong>Intensity: </strong>
              </label>
              <select
                id="intensity"
                value={selectedOptions.intensity}
                onChange={(e) => handleSelectChange(e, 'intensity')}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="">Choose</option>
                {intensityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {/* Frequency dropdown */}
            <div className="w-1/3">
              <label htmlFor="frequency" className="mr-2">
                <strong>Frequency: </strong> <i>(days in a week)</i>
              </label>
              <select
                id="frequency"
                value={selectedOptions.frequency}
                onChange={(e) => handleSelectChange(e, 'frequency')}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="">Choose</option>
                {frequencyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {/* Duration dropdown */}
            <div className="w-1/3">
              <label htmlFor="duration" className="mr-2">
                <strong>Duration: </strong><i>(minute per session)</i>
              </label>
              <select
                id="duration"
                value={selectedOptions.duration}
                onChange={(e) => handleSelectChange(e, 'duration')}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="">Choose</option>
                {durationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-4">
        </div>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          {/* Container to display trainers side by side */}
          {Array.from({ length: 50 }).map((_, index) => (
            <div key={index}>
              {/* Set the width as per your preference, in this case, 20% */}
              <Trainer />
            </div>
          ))}
        </div>
      </div>

      <div id="enrolledclass" className="p-4 sm:ml-64">
        <div className="p-4 border border-gray-300 rounded-lg dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-900">
            Enrolled Classes
          </h1> 
        </div>
        <div className="mt-4">
        </div>
        
      </div>
    </>
  );
}

export default Sidebar;
