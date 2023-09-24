import React, { useEffect, useState } from "react";
import ClassCard from "../../Classes/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes?limit=6`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-24">
      <h2 className="text-4xl sm:text-5xl font-amaranth font-bold text-center mb-10 dark:text-white/95">
        Popular Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 lg:px-0">
        {classes.map((Class) => (
          <ClassCard key={Class._id} Class={Class}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
