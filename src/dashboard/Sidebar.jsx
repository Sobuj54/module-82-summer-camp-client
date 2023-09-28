import {
  faBars,
  faCartShopping,
  faChevronLeft,
  faCubes,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

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

      <div className="border w-full border-black/50 dark:border-white mb-5" />

      <div className="ml-4 flex flex-col gap-7">
        <Link
          to="/"
          className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faHouse} className="mr-5 text-xl" />{" "}
          <span className={`${isCollapsed && `hidden`}`}>Home</span>
        </Link>
        <Link className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faCubes} className="mr-5 text-xl" />{" "}
          <span className={`${isCollapsed && `hidden`}`}>Dashboard</span>
        </Link>
        <Link className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faCartShopping} className="mr-5 text-xl" />{" "}
          <span className={`${isCollapsed && `hidden`}`}>Orders</span>
        </Link>
        <Link className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faUsers} className="mr-5 text-xl" />{" "}
          <span className={`${isCollapsed && `hidden`}`}>Users</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
