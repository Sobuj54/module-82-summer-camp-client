import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useOutletContext } from "react-router-dom";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SelectedClasses = () => {
  const [isCollapsed] = useOutletContext();
  const axiosSecure = useAxiosSecure();

  const { data: selectedClasses = [], isLoading } = useQuery({
    queryKey: ["selectedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes/enrolled");
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Student Dashboard | Classes</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        <DashboardTitle title="Selected Classes"></DashboardTitle>
        {isLoading ? (
          <div className="w-full h-96 flex items-center justify-center">
            <div
              className="inline-block text-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          <table className="table-auto w-full border-separate border-spacing-6">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map((selectedClass, index) => (
                <tr key={selectedClass._id} className="text-center">
                  <td>{index + 1}</td>
                  <td className="flex items-center justify-center">
                    <img
                      src={selectedClass?.img}
                      alt={selectedClass?.name}
                      className="w-24 h-20 rounded-lg object-cover"
                    />
                  </td>
                  <td>{selectedClass?.name}</td>
                  <td>{selectedClass?.price}</td>
                  <td>
                    {" "}
                    <Link>
                      <button className="bg-amber-500 px-3 py-2 rounded-md text-white font-amaranth font-medium">
                        Pay Now
                      </button>
                    </Link>
                  </td>
                  <td>delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default SelectedClasses;
