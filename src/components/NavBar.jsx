import Logo from "../assets/fitfusion.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 border-gray-200 dark:bg-gray-1000 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Fit Fusion Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Fit Fusion
          </span>
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link to="./banner">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-600 md:p-0 md:dark:text-purple-600 hover:bg-purple-600 hover:text-white"
                aria-current="page"
              >
                Home
              </a>
              </Link>
            </li>
            <li>
              <Link to="./about">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-600 md:p-0 md:dark:text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                About
              </a>
              </Link>
            </li>
            <li>
              <Link to="./trainer">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-600 md:p-0 md:dark:text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Trainors
              </a>
              </Link>
            </li>
            <li>
              <Link to="./contact">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-600 md:p-0 md:dark:text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Contact
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
