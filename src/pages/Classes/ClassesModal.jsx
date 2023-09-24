import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ClassesModal = ({ Class, isModalOpen, setIsModalOpen }) => {
  const {
    img,
    name,
    age_group,
    schedule,
    price,
    available_seats,
    description,
    instructor,
  } = Class;

  return (
    <div className="fixed top-1/2 -translate-y-1/2 w-10/12 left-1/2 -translate-x-1/2 z-10 bg-gray-100 dark:bg-slate-900 rounded-3xl">
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="text-white text-2xl absolute top-0 right-0 bg-red-500 rounded-full h-6 md:h-10 w-6 md:w-10 flex items-center justify-center">
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:p-12 items-center justify-center gap-5">
        <div className="relative shadow-xl dark:shadow-teal-300 rounded-lg">
          <img
            src={img}
            alt={name}
            className="w-full rounded-lg object-cover"
          />
          <h4 className="absolute bg-yellow-500 top-0 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full p-1 right-0 text-white font-semibold font-amita">
            $ {price}
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center dark:text-cyan-300 font-bold font-amaranth mt-4 text-xl md:text-2xl">
            {name}
          </h2>
          <h3 className="text-center dark:text-white/95 font-semibold font-amaranth my-4 text-base md:text-lg">
            Instructor : {instructor}
          </h3>
          <h6 className="text-center dark:text-white/95 font-amaranth text-lg">
            {age_group}
          </h6>
          <p className="dark:text-white/95 text-center font-amaranth mt-2">
            Available seats : {available_seats}
          </p>
          <p className="text-center dark:text-white/95 font-amaranth text-base my-2">
            {schedule}
          </p>
          <p className="text-center dark:text-white/95 font-amaranth text-base my-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassesModal;
