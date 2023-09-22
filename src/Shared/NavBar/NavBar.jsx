import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAndClose = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Home{" "}
      </NavLink>

      <NavLink
        to="/instructors"
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Instructors{" "}
      </NavLink>

      <NavLink
        to="/classes"
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Classes{" "}
      </NavLink>

      <NavLink
        to="/dashboard"
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Dashboard{" "}
      </NavLink>
    </>
  );

  return (
    <section className="bg-white bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-amaranth font-semibold">
              Art & Craft
            </h3>
          </div>

          {/* hamburger menu */}
          {isOpen ? (
            <button
              onClick={openAndClose}
              type="button"
              className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800">
              <svg
                className=" w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          ) : (
            <button
              onClick={openAndClose}
              type="button"
              className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800">
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          {/* nav links for large devices */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 font-amita font-semibold">
            {navLinks}
          </div>

          <Link
            to="/login"
            onClick={openAndClose}
            className="hidden font-amaranth lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full">
            {" "}
            Login{" "}
          </Link>

          {/* nav links for mobile devices */}
          <div
            className={`lg:hidden absolute flex flex-col items-center gap-3 z-10 bg-white/95 p-12 w-8/12 sm:w-6/12 rounded-lg transition-all duration-500 ease-in-out ${
              isOpen
                ? `top-1/4 md:top-1/3 left-1/2 -translate-x-1/2 `
                : `-top-3/4 left-1/2 -translate-x-1/2`
            }`}>
            {navLinks}

            <Link
              to="/login"
              onClick={openAndClose}
              className="font-amaranth mt-4 inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full">
              {" "}
              Login{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
