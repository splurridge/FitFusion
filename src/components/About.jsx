import React from 'react';

function About() {
  return (
    <div>
    <div className="flex h-screen text-gray-900">
      <div className="bg-white w-1/2 justify-left p-6 mt-10">
        <div>
          <h1 className="text-8xl font-bold mb-4">
            Workout with <br />Fit Fusion. <br />
          </h1>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-900 h-screen flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-4 mx-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
    </div>

    </div>
  );
}

export default About;
