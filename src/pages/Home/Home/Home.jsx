import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import MidHero from "../MidHero/MidHero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Art & Craft | Home</title>
      </Helmet>
      <Hero></Hero>
      <MidHero></MidHero>
    </>
  );
};

export default Home;
