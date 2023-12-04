import {Link} from 'react-router-dom';
import Logo from "../assets/fitfusion.png";

function Header() {
  return (
    <nav className="bg-gray-800 border-gray-200 dark:bg-gray-1000 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Fit Fusion Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Fit Fusion
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
