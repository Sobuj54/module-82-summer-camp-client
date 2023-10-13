import React from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import useContextApi from "../../Hooks/useContextApi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MyClassesCard from "./MyClassesCard";

const MyClasses = () => {
  const [isCollapsed] = useOutletContext();
  const axiosSecure = useAxiosSecure();
  const { user } = useContextApi();

  const {
    data: instructorClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["instructorClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/classes/instructorClasses?email=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Instructor Dashboard | Add a Class</title>
      </Helmet>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-56">
          <div
            className="inline-block text-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div
          className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
            isCollapsed ? `left-16` : ` left-56`
          }`}>
          <DashboardTitle title="My Classes"></DashboardTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:max-w-7xl px-3">
            {instructorClasses.map((Class) => (
              <MyClassesCard
                key={Class._id}
                Class={Class}
                refetch={refetch}></MyClassesCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyClasses;
