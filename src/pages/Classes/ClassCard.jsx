import { useState } from "react";
import ClassesModal from "./ClassesModal";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useFindRole from "../../Hooks/useFindRole";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContextApi from "../../Hooks/useContextApi";

const ClassCard = ({ Class }) => {
  const { user } = useContextApi();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [userRole] = useFindRole();

  const {
    _id,
    img,
    name,
    age_group,
    schedule,
    price,
    available_seats,
    instructor,
  } = Class;

  const handleEnrollClass = () => {
    axiosSecure
      .post("/classes/selected", {
        userEmail: user.email,
        name: name,
        img: img,
        price: price,
        available_seats: available_seats,
        instructor: instructor,
        isPaid: false,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`You've enrolled in ${name} class`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

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

        <button
          onClick={handleEnrollClass}
          disabled={userRole?.role !== "student"}
          className={`${
            userRole?.role !== "student" ? "bg-gray-400" : "bg-emerald-500"
          } w-28 p-3 font-semibold rounded-lg text-white font-amita`}>
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
      <ToastContainer />
    </div>
  );
};

export default ClassCard;
