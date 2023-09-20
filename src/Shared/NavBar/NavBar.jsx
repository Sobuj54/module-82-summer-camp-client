import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <section className="bg-white bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-amaranth font-semibold">
              Art & Craft
            </h3>
          </div>

          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800">
            <svg
              className="block w-6 h-6 mr-2"
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
            <svg
              className="hidden w-6 h-6 mr-2"
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
            Menu
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 font-amita font-semibold">
            <NavLink
              to="/"
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
              {" "}
              Home{" "}
            </NavLink>

            <NavLink
              to="/instructors"
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
              {" "}
              Instructors{" "}
            </NavLink>

            <NavLink
              to="/classes"
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
              {" "}
              Classes{" "}
            </NavLink>

            <NavLink
              to="/dashboard"
              className={`${({ isActive }) => {
                isActive ? "active" : "";
              }} text-base text-black transition-all duration-200 hover:text-opacity-80)`}>
              {" "}
              Dashboard{" "}
            </NavLink>
          </div>

          <Link
            to="/login"
            className="hidden font-amaranth lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
            role="button">
            {" "}
            Join Now{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
