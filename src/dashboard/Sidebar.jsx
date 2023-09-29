import {
  faBars,
  faCartShopping,
  faChevronLeft,
  faCubes,
  faHouse,
  faListCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const handleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const admin = !true;

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 dark:bg-gray-950 transition-all duration-300 ease-in-out ${
        isCollapsed ? `w-16` : `w-56 `
      } border-2 dark:border-gray-950`}>
      <div
        className={`flex items-center justify-end ${
          isCollapsed && "justify-center"
        } my-4 mr-2`}>
        <button onClick={handleSidebar}>
          {isCollapsed ? (
            <FontAwesomeIcon
              icon={faBars}
              className="border-[1px] p-3 dark:text-white"
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="dark:text-white p-3"
            />
          )}
        </button>
      </div>

      <div className="w-full h-[1px] bg-black dark:bg-cyan-300 mb-5" />

      <div className="ml-4 flex flex-col gap-7">
        {/* home */}
        <Link
          to="/"
          className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faHouse} className="mr-5 text-xl" />{" "}
          <span className={` ${isCollapsed && `hidden`}`}>Home</span>
        </Link>

        {/* dashboard */}
        <NavLink
          to={
            admin ? "/dashboard/dashboardHome" : "/dashboard/studentDashboard"
          }
          className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faCubes} className="mr-5 text-xl" />{" "}
          <span className={` ${isCollapsed && `hidden`}`}>Dashboard</span>
        </NavLink>

        {/* manage classes */}
        <NavLink
          to={admin ? "/dashboard/manageClasses" : "/dashboard/selectedClasses"}
          className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faListCheck} className="mr-5 text-xl" />{" "}
          <span className={`${isCollapsed && `hidden`}`}>
            {admin ? "Manage Classes" : "Selected Classes"}
          </span>
        </NavLink>

        {/* manage users */}
        <NavLink
          to={admin ? "/dashboard/users" : "/dashboard/enrolledClasses"}
          className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faUsers} className="mr-5 text-xl" />{" "}
          <span className={`${isCollapsed && `hidden`}`}>
            {admin ? "Manage Users" : "Enrolled Classes"}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
