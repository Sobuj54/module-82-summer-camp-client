import { useEffect, useState } from "react";
import MiniHero from "../../Shared/MiniHero/MiniHero";
import instructorImg from "../../assets/summerCamp/instructor.avif";
import Instructor from "./Instructor";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors?limit=0")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-teal-200/30 dark:bg-gray-950">
      <Helmet>
        <title>Art & Craft | Instructors</title>
      </Helmet>
      <MiniHero
        image={instructorImg}
        title="Our Instructors"
        subTitle="Art & Craft / Instructors"></MiniHero>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-5 lg:px-0 max-w-7xl mx-auto">
        {instructors.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
