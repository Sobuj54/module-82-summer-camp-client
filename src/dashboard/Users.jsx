import {
  faUserLarge,
  faUserShield,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardTitle from "./DashboardTitle/DashboardTitle";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Users = () => {
  const [isCollapsed] = useOutletContext();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // using useMutation hook
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newRole) =>
      axiosSecure.patch(`/users`, newRole).then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success(`User is now ${newRole?.role}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const updateUserRole = (id, role) => {
    mutation.mutate({ id: id, role: role });
  };

  return (
    <>
      <Helmet>
        <title>Admin | Manage Users</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 bottom-0 dark:bg-gray-950 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        <DashboardTitle title="Manage Users"></DashboardTitle>
        {isLoading ? (
          <div className="flex items-center justify-center h-screen w-full">
            <div
              className="inline-block text-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          <table className="table-auto w-full border-separate border-spacing-6 dark:text-white">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Current Role</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{user?.name}</td>
                  <td className="text-center">{user?.email}</td>
                  <td className="text-center capitalize">{user?.role}</td>

                  {/* make admin */}
                  <td className="text-center">
                    {user?.role === "admin" ? (
                      <button
                        onClick={() => updateUserRole(user?._id, "student")}
                        className="bg-green-500 px-3 py-2 rounded-lg text-white">
                        <FontAwesomeIcon icon={faUserShield} />
                      </button>
                    ) : (
                      <button
                        onClick={() => updateUserRole(user?._id, "admin")}
                        className="bg-red-500 px-3 py-2 text-white rounded-lg">
                        <FontAwesomeIcon icon={faUserLarge} />
                      </button>
                    )}
                  </td>

                  {/* make instructor */}
                  <td className="text-center">
                    {user?.role === "instructor" ? (
                      <button
                        onClick={() => updateUserRole(user?._id, "student")}
                        className="bg-green-500 px-3 py-2 rounded-lg text-white">
                        <FontAwesomeIcon icon={faUserTie} />
                      </button>
                    ) : (
                      <button
                        onClick={() => updateUserRole(user?._id, "instructor")}
                        className="bg-red-500 px-3 py-2 text-white rounded-lg">
                        <FontAwesomeIcon icon={faUserLarge} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Users;
