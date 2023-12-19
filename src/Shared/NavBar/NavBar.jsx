import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";
import useContextApi from "../../Hooks/useContextApi";
import useFindRole from "../../Hooks/useFindRole";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  // this is custom hook for context api
  const { user, logOut } = useContextApi();
  const [userRole] = useFindRole();
  const [isOpen, setIsOpen] = useState(false);

  const openAndClose = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log("logged Out");
        toast.success("Logout Successful !", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base dark:text-white text-black transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Home{" "}
      </NavLink>

      <NavLink
        to="/instructors"
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base dark:text-white text-black transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Instructors{" "}
      </NavLink>

      <NavLink
        to="/classes"
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base dark:text-white text-black transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Classes{" "}
      </NavLink>

      <NavLink
        to={
          userRole?.role === "admin"
            ? "/dashboard/adminDashboard"
            : userRole?.role === "instructor"
            ? "/dashboard/instructorDashboard"
            : "/dashboard/studentDashboard"
        }
        onClick={openAndClose}
        className={`${({ isActive }) => {
          isActive ? "active" : "";
        }} text-base text-black dark:text-white transition-all duration-200 hover:text-opacity-80)`}>
        {" "}
        Dashboard{" "}
      </NavLink>
    </>
  );

  return (
    <>
      <section className="bg-white dark:bg-slate-950 bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <h3 className="text-2xl font-amaranth font-semibold dark:text-white">
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
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 font-amaranth font-semibold">
              {navLinks}
            </div>

            {/* theme switcher for large devices */}
            <div className="hidden lg:flex items-center gap-7">
              {/* theme switcher component */}
              <SwitchTheme></SwitchTheme>

              {user ? (
                <Link
                  to="/login"
                  onClick={handleLogOut}
                  className="font-amaranth inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-base transition-all duration-200 hover:bg-yellow-300 dark:hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 dark:focus:bg-yellow-300 font-semibold text-white dark:text-black bg-black dark:bg-white rounded-full">
                  {" "}
                  Logout{" "}
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="font-amaranth inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-base transition-all duration-200 hover:bg-yellow-300 dark:hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 dark:focus:bg-yellow-300 font-semibold text-white dark:text-black bg-black dark:bg-white rounded-full">
                  {" "}
                  Login{" "}
                </Link>
              )}
            </div>

            {/* nav links for mobile devices */}
            <div
              className={`lg:hidden absolute flex flex-col items-center gap-3 z-10 bg-white/95 p-12 w-8/12 sm:w-6/12 rounded-lg transition-all duration-500 ease-in-out
            dark:bg-gray-950 ${
              isOpen
                ? `top-1/4 md:top-1/3 left-1/2 -translate-x-1/2 `
                : `-top-3/4 left-1/2 -translate-x-1/2`
            }`}>
              {navLinks}

              {/* for mobile */}
              <div className="flex flex-col sm:flex-row items-center gap-7 mt-4">
                {/* theme switcher component */}
                <SwitchTheme></SwitchTheme>

                {user ? (
                  <Link
                    to="/login"
                    onClick={handleLogOut}
                    className="font-amaranth inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-base transition-all duration-200 hover:bg-yellow-300 dark:hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 dark:focus:bg-yellow-300 font-semibold text-white dark:text-black bg-black dark:bg-white rounded-full">
                    {" "}
                    Logout{" "}
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="font-amaranth inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-base transition-all duration-200 hover:bg-yellow-300 dark:hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 dark:focus:bg-yellow-300 font-semibold text-white dark:text-black bg-black dark:bg-white rounded-full">
                    {" "}
                    Login{" "}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default NavBar;
