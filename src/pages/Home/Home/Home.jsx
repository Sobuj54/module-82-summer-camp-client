import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import MidHero from "../MidHero/MidHero";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Art & Craft | Home</title>
      </Helmet>
      <Hero></Hero>
      <MidHero></MidHero>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
