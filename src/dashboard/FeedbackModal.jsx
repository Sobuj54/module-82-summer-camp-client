import React from "react";
import { useForm } from "react-hook-form";
import useFindRole from "../Hooks/useFindRole";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useContextApi from "../Hooks/useContextApi";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackModal = ({ isModalOpen, setIsModalOpen, idForModal }) => {
  const { handleSubmit, register, reset } = useForm();
  const { user } = useContextApi();
  const [userRole] = useFindRole();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    axiosSecure
      .put(`/classes/feedback/${idForModal}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          reset();
          setIsModalOpen(!isModalOpen);
          toast.success(`Feedback is Sent !`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch(() => {
        toast.error("Error ! Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 w-10/12 left-1/2 -translate-x-1/2 z-10 bg-gray-200 dark:bg-slate-900 rounded-3xl">
      {/* close button */}
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="text-white text-2xl absolute top-0 right-0 bg-red-500 rounded-full h-6 md:h-10 w-6 md:w-10 flex items-center justify-center">
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
          <div>
            <label className="text-base font-medium text-gray-900">
              {" "}
              Your name{" "}
            </label>
            <div className="mt-2.5 relative">
              <input
                {...register("name", { required: true })}
                type="text"
                value={user?.displayName}
                placeholder="Enter your name"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              {" "}
              Your Role{" "}
            </label>
            <div className="mt-2.5 relative">
              <input
                {...register("role", { required: true })}
                type="text"
                value={userRole?.role}
                placeholder="Enter your role"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
              />
            </div>
          </div>

          {/* class description */}
          <div className="sm:col-span-2">
            <label className="text-base font-medium text-gray-900">
              {" "}
              Feedback{" "}
            </label>
            <div className="mt-2.5 relative">
              <textarea
                placeholder="Provide class description"
                {...register("feedback", { required: true })}
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                rows="4"></textarea>
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FeedbackModal;
