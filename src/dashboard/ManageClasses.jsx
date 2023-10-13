import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import DashboardTitle from "./DashboardTitle/DashboardTitle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faSquareCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedbackModal from "./FeedbackModal";

const ManageClasses = () => {
  const [isCollapsed] = useOutletContext();
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idForModal, setIdForModal] = useState(null);

  const { data: allClasses = [], isLoading: isDataLoading } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes/allClasses");
      return res.data;
    },
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (updatedStatus) =>
      axiosSecure
        .patch("/classes/allClasses", updatedStatus)
        .then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            toast.success(`${updatedStatus?.status} !`, {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error !", {
            position: toast.POSITION.TOP_LEFT,
          });
        }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allClasses"] });
    },
  });

  const handleUpdateStatus = (newStatus, id) => {
    mutation.mutate({ id: id, status: newStatus });
  };

  const handleModal = (id) => {
    setIsModalOpen(!isModalOpen);
    setIdForModal(id);
  };

  return (
    <>
      <Helmet>
        <title>Admin | Manage Classes</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        <DashboardTitle title="Manage Classes"></DashboardTitle>

        {isDataLoading ? (
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
          <table className="table-auto border-separate border-spacing-5 w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Deny</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((Class, index) => (
                <tr key={Class._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="flex items-center justify-center">
                    <img
                      src={Class?.img}
                      alt={Class?.name}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                  </td>
                  <td className="text-center">{Class?.name}</td>
                  <td className="text-center">{Class?.instructor}</td>
                  <td
                    className={`${
                      Class?.status === "approved"
                        ? "text-green-600"
                        : Class?.status === "denied"
                        ? "text-red-500"
                        : ""
                    } capitalize text-center underline underline-offset-4 font-semibold`}>
                    {Class?.status}
                  </td>
                  <td className="text-center text-white">
                    {/*  approve button*/}
                    <button
                      onClick={() => handleUpdateStatus("approved", Class?._id)}
                      disabled={Class?.status !== "pending"}>
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className={`${
                          Class?.status !== "pending"
                            ? "bg-slate-400"
                            : "bg-green-500"
                        }  p-3 h-5 rounded-md`}
                      />
                    </button>
                  </td>
                  <td className="text-center text-white">
                    {/* deny button */}
                    <button
                      onClick={() => handleUpdateStatus("denied", Class?._id)}
                      disabled={Class?.status !== "pending"}>
                      <FontAwesomeIcon
                        icon={faXmark}
                        className={`${
                          Class?.status !== "pending"
                            ? "bg-gray-400"
                            : "bg-red-500"
                        }  p-3 h-5 rounded-md`}
                      />
                    </button>
                  </td>
                  {/* feedback button */}
                  <td className="text-center text-white">
                    <button
                      onClick={() => handleModal(Class._id)}
                      disabled={Class?.status !== "denied"}>
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        className={`${
                          Class?.status !== "denied"
                            ? "bg-gray-400"
                            : "bg-amber-500"
                        }  p-3 h-5 rounded-md`}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {isModalOpen && (
          <FeedbackModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            idForModal={idForModal}></FeedbackModal>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default ManageClasses;
