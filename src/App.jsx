import Footer from "./components/Footer";

import { Link } from 'react-router-dom';

function App() {


  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Fit Fusion
          </span>
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-600 md:p-0 md:dark:text-purple-600"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <Link  to='/about'>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            </Link>
            <Link>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Trainors
              </a>
            </li>
            </Link>
            <Link to='/contact'>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
      <div className="bg-gray-900 h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Get the best part of your day. <br />{" "}
          <span className="text-purple-600">You fit here.</span>
        </h1>
        <h6 className="font-light text-lg mb-6">
          We provide serious fitness but within a fun and friendly, safe space.
        </h6>
        <Link to='/signUp'>
        <button className="font-bold bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition-colors">
          Join Now
        </button>
        </Link>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default App;
