import React from "react";
import { useOutletContext } from "react-router-dom";

const MyClassesCard = ({ Class }) => {
  const {
    img,
    name,
    age_group,
    schedule,
    price,
    available_seats,
    status,
    enrolledStudents,
  } = Class;

  const [isCollapsed] = useOutletContext();

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
    </div>
  );
};

export default MyClassesCard;
