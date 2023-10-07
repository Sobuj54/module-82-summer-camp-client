import React from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import DashboardTitle from "../DashboardTitle/DashboardTitle";

const MyClasses = () => {
  const [isCollapsed] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Instructor Dashboard | Add a Class</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        <DashboardTitle title="My Classes"></DashboardTitle>
      </div>
    </>
  );
};

export default MyClasses;
