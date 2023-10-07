import {
  faBars,
  faChevronLeft,
  faCreditCard,
  faCubes,
  faHouse,
  faList,
  faListCheck,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useContextApi from "../Hooks/useContextApi";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const axiosSecure = useAxiosSecure();
  const { user, isAdminLoading } = useContextApi();

  const handleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { data: currentUser } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/details?email=${user?.email}`);
      return res.data;
    },
    enabled: !isAdminLoading,
  });

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 dark:bg-gray-950 transition-all duration-300 ease-in-out ${
        isCollapsed ? `w-16` : `w-56 `
      } border-2 dark:border-gray-600`}>
      {/* hamburger and collapse button */}
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

      <div className="flex flex-col dark:text-white items-center gap-2 mb-5">
        <img
          src={currentUser?.photoURL}
          alt="user"
          className={` ${
            isCollapsed ? `w-12 h-12` : `w-16 h-16`
          } rounded-full object-cover`}
        />
        {isCollapsed || (
          <>
            <h4 className="text-xl">{currentUser?.name}</h4>
            <p className="text-lg overflow-hidden">{currentUser?.email}</p>
            <p className="text-base">Role: {currentUser?.role}</p>
          </>
        )}
      </div>

      <div className="w-full h-[1px] bg-black dark:bg-cyan-300 mb-5" />

      <div className="ml-4 flex flex-col gap-7 overflow-hidden ">
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
            currentUser?.role === "admin"
              ? "/dashboard/adminDashboard"
              : currentUser?.role === "instructor"
              ? "/dashboard/instructorDashboard"
              : "/dashboard/studentDashboard"
          }
          className="text-lg font-sans dark:text-white flex items-center">
          <FontAwesomeIcon icon={faCubes} className="mr-5 text-xl" />{" "}
          <span className={` ${isCollapsed && `hidden`}`}>Dashboard</span>
        </NavLink>

        {/* payment section for students */}
        {currentUser?.role === "student" ? (
          <NavLink
            to="/dashboard/payment"
            className="text-lg font-sans dark:text-white flex items-center">
            <FontAwesomeIcon icon={faCreditCard} className="mr-5 text-xl" />
            <span className={` ${isCollapsed && `hidden`}`}>Payment</span>
          </NavLink>
        ) : (
          <></>
        )}

        {/* manage classes */}
        <NavLink
          to={
            currentUser?.role === "admin"
              ? "/dashboard/manageClasses"
              : currentUser?.role === "instructor"
              ? "/dashboard/addClass"
              : "/dashboard/selectedClasses"
          }
          className="text-lg font-sans dark:text-white flex items-center">
          {currentUser?.role === "instructor" ? (
            <FontAwesomeIcon icon={faPlus} className="mr-5 text-xl" />
          ) : (
            <FontAwesomeIcon icon={faListCheck} className="mr-5 text-xl" />
          )}{" "}
          <span className={`${isCollapsed && `hidden`}`}>
            {currentUser?.role === "admin"
              ? "Manage Classes"
              : currentUser?.role === "instructor"
              ? "Add a Class"
              : "Selected Classes"}
          </span>
        </NavLink>

        {/* manage users */}
        <NavLink
          to={
            currentUser?.role === "admin"
              ? "/dashboard/users"
              : currentUser?.role === "instructor"
              ? "/dashboard/myClasses"
              : "/dashboard/enrolledClasses"
          }
          className="text-lg font-sans dark:text-white flex items-center">
          {currentUser?.role === "instructor" ? (
            <FontAwesomeIcon icon={faList} className="mr-5 text-xl" />
          ) : (
            <FontAwesomeIcon icon={faUsers} className="mr-5 text-xl" />
          )}{" "}
          <span className={`${isCollapsed && `hidden`}`}>
            {currentUser?.role === "admin"
              ? "Manage Users"
              : currentUser?.role === "instructor"
              ? "My Classes"
              : "Enrolled Classes"}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
