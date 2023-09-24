import React from "react";

const Instructor = ({ instructor }) => {
  const { name, img, bio, classes_taught, email } = instructor;

  return (
    <div className="border-2 p-5 rounded-lg border-lime-400 dark:border-emerald-400 mt-5 md:mt-10 bg-lime-400/40 dark:bg-gray-900 shadow-xl shadow-lime-500 dark:shadow-emerald-400">
      <div>
        <img
          src={img}
          alt={name}
          className="h-64 w-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-5 dark:text-white/95">
        <h3 className="text-2xl font-amaranth font-semibold">{name}</h3>
        <p className="text-lg font-amaranth">{email}</p>
        <p className="text-base font-amaranth">Class : {classes_taught}</p>
        <p className="font-amaranth text-center">{bio}</p>
      </div>
    </div>
  );
};

export default Instructor;
