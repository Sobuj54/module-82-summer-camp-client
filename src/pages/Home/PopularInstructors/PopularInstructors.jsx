import React, { useEffect, useState } from "react";
import Instructor from "../../Instructors/Instructor";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="py-24 bg-emerald-300/10 dark:bg-gray-950">
      <h2 className="font-amaranth text-4xl sm:text-5xl text-center font-bold mb-5 md:mb-10 dark:text-white/95">
        Popular Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-5 lg:p-0 max-w-7xl mx-auto">
        {instructors.map((instructor, index) => (
          <Instructor key={index} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
