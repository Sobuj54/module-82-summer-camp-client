import React from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContextApi from "../../Hooks/useContextApi";

const AddClass = () => {
  const [isCollapsed] = useOutletContext();
  const axiosSecure = useAxiosSecure();
  const { user } = useContextApi();

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const {
      className,
      classImg,
      description,
      ageLimit,
      price,
      availableSeats,
      classTime,
      instructorName,
      instructorEmail,
    } = data;

    axiosSecure
      .post("/classes/addClass", {
        name: className,
        img: classImg,
        description: description,
        age_group: ageLimit,
        price: parseInt(price),
        available_seats: parseInt(availableSeats),
        enrolledStudents: parseInt(0),
        schedule: classTime,
        instructor: instructorName,
        email: instructorEmail,
        status: "pending",
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Successfully added a class !", {
            position: toast.POSITION.TOP_CENTER,
          });
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong !", {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Instructor Dashboard | Add a Class</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        <DashboardTitle title="Add a Class"></DashboardTitle>

        <div className="py-10 bg-gray-100 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Add a Class
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                To create a new class please fill the form below and click Add
                button.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
              <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-12 sm:p-12">
                  {/* add a class form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Class name{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            {...register("className", { required: true })}
                            type="text"
                            placeholder="Enter class name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Class Image{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="url"
                            {...register("classImg", { required: true })}
                            placeholder="Enter class image url"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Instructor Name{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            value={user?.displayName}
                            {...register("instructorName", { required: true })}
                            placeholder="Enter your full name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Instructor Email{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="email"
                            {...register("instructorEmail", { required: true })}
                            placeholder="Enter your email"
                            value={user?.email}
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      {/* available seats */}
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Available Seats{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="number"
                            {...register("availableSeats", { required: true })}
                            placeholder="Enter available seats"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>
                      {/* price */}
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Price{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="number"
                            {...register("price", { required: true })}
                            placeholder="Enter Price"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      {/* age limit */}
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Age{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            {...register("ageLimit", { required: true })}
                            placeholder="Enter age limit"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      {/* class time */}
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Class Time{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            {...register("classTime", { required: true })}
                            placeholder="Enter class time"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      {/* class description */}
                      <div className="sm:col-span-2">
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Description{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <textarea
                            placeholder="Provide class description"
                            {...register("description", { required: true })}
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                            rows="4"></textarea>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddClass;
