import React from "react";

const DashboardTitle = ({ title }) => {
  return (
    <div className="dark:text-white  bg-cyan-600 dark:bg-gray-900 py-3">
      <h2 className="text-3xl ml-7 text-white dark:text-cyan-400">{title}</h2>
    </div>
  );
};

export default DashboardTitle;
