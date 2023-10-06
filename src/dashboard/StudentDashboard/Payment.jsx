import React from "react";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";

const Payment = () => {
  const [isCollapsed] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Student Dashboard | Payment</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 bottom-0 dark:bg-gray-950 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        <DashboardTitle title="Payment"></DashboardTitle>
      </div>
    </>
  );
};

export default Payment;
