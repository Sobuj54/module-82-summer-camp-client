import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MyClassesCard = ({ Class }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    img,
    name,
    age_group,
    schedule,
    price,
    available_seats,
    status,
    enrolledStudents,
    Feedback,
  } = Class;

  return (
    <div className="border-2 border-amber-400 dark:border-emerald-300 p-5 rounded-lg relative shadow-xl shadow-yellow-400 dark:shadow-sky-400 mt-5 md:mt-10">
      <img
        src={img}
        alt={name}
        className="h-56 w-full rounded-lg object-cover"
      />
      <h4 className="absolute bg-yellow-500 top-1.5 w-16 h-16 flex items-center justify-center rounded-full p-3 right-0 text-white font-semibold font-amita">
        $ {price}
      </h4>
      <h2 className="text-center dark:text-white/95 font-bold font-amaranth my-4 text-2xl">
        {name}
      </h2>
      <h6 className="text-center dark:text-white/95 font-amaranth text-lg">
        Age group : {age_group}
      </h6>
      <p className="dark:text-white/95 text-center font-amaranth mt-2">
        Available seats : {available_seats}
      </p>
      <p className="dark:text-white/95 text-center font-amaranth mt-2">
        Enrolled Students : {enrolledStudents}
      </p>
      <p className="text-center dark:text-white/95 font-amaranth text-base my-2">
        {schedule}
      </p>
      <p className="text-center dark:text-white/95 font-amaranth text-base my-2">
        Status : {status}
      </p>
      {Feedback?.name && (
        <div className="text-center mt-4">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="bg-teal-500 py-2 px-3 font-medium rounded-md text-white">
            Show Feedback
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed top-1/2 -translate-y-1/2 w-10/12 left-1/2 -translate-x-1/2 z-10 bg-gray-200 dark:bg-slate-900 rounded-3xl p-10 text-center">
          {/* close button */}
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="text-white text-2xl absolute top-0 right-0 bg-red-500 rounded-full h-6 md:h-10 w-6 md:w-10 flex items-center justify-center">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          <h4>
            <span className="font-medium">From</span> : {Feedback?.name}
          </h4>
          <h6 className="my-4 capitalize">
            <span className="font-medium">Role</span> : {Feedback?.role}
          </h6>
          <p>
            <span className="font-medium">Feedback</span> : {Feedback?.feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default MyClassesCard;
