import React from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const [isCollapsed] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Admin | Dashboard</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        dashboard
      </div>
    </>
  );
};

export default Dashboard;
