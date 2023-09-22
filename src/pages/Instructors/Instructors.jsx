import MiniHero from "../../Shared/MiniHero/MiniHero";
import instructor from "../../assets/summerCamp/instructor.avif";

const Instructors = () => {
  return (
    <div>
      <MiniHero
        image={instructor}
        title="Our Instructors"
        subTitle="Art & Craft / Instructors"></MiniHero>
    </div>
  );
};

export default Instructors;
