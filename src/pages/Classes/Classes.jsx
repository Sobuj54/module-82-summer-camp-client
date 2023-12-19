import { useEffect, useState } from "react";
import MiniHero from "../../Shared/MiniHero/MiniHero";
import image from "../../assets/summerCamp/group-girls-camping-forest_1303-9509.avif";
import { Helmet } from "react-helmet-async";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes?limit=0`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Art & Craft | Classes</title>
      </Helmet>
      <MiniHero
        image={image}
        title="All of Our Classes"
        subTitle="Art & Craft / Classes"></MiniHero>
      <div className="bg-yellow-400/20 dark:bg-gray-950">
        <h2 className="text-4xl font-amita font-bold text-center pt-20 text-rose-500 dark:text-cyan-300">
          Summer 2023
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 sm:px-7 lg:px-0 max-w-7xl mx-auto pt-14 pb-28">
          {classes.map((Class) => (
            <ClassCard key={Class?._id} Class={Class}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
