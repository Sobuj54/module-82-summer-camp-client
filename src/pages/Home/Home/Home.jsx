import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import MidHero from "../MidHero/MidHero";
import Testimonials from "../Testimonials/Testimonials";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Art & Craft | Home</title>
      </Helmet>
      <Hero></Hero>
      <PopularClasses></PopularClasses>
      <Features></Features>
      <PopularInstructors></PopularInstructors>
      <Testimonials></Testimonials>
      <MidHero></MidHero>
    </>
  );
};

export default Home;
