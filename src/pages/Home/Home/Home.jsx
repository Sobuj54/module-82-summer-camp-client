import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import MidHero from "../MidHero/MidHero";
import Testimonials from "../Testimonials/Testimonials";
import Features from "../Features/Features";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Art & Craft | Home</title>
      </Helmet>
      <Hero></Hero>
      <MidHero></MidHero>
      <Testimonials></Testimonials>
      <Features></Features>
    </>
  );
};

export default Home;
