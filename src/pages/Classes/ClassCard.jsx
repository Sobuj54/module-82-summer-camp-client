import { useState } from "react";
import ClassesModal from "./ClassesModal";

const ClassCard = ({ Class }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { img, name, age_group, schedule, price, available_seats } = Class;

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
        {age_group}
      </h6>
      <p className="dark:text-white/95 text-center font-amaranth mt-2">
        Available seats : {available_seats}
      </p>
      <p className="text-center dark:text-white/95 font-amaranth text-base my-2">
        {schedule}
      </p>
      <div className="flex flex-col sm:flex-row mt-9 mb-5 items-center justify-center gap-8">
        {isModalOpen ? (
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="bg-rose-500 font-semibold w-28 p-3 rounded-lg text-white font-amita">
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="bg-rose-500 font-semibold w-28 p-3 rounded-lg text-white font-amita">
            Show More
          </button>
        )}

        <button className="bg-emerald-500 w-28 p-3 font-semibold rounded-lg text-white font-amita">
          Enroll
        </button>
      </div>

      {/* this is the modal */}
      {isModalOpen ? (
        <ClassesModal
          Class={Class}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}></ClassesModal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClassCard;
