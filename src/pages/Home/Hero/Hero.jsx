import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  useEffect(() => {
    fetch("hero.json")
      .then((res) => res.json())
      .then((data) => {
        setHeroData(data);
      });
  }, []);

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-screen w-full 2xl:max-w-7xl">
      {heroData.map((data) => (
        <SwiperSlide key={data.id}>
          <div
            className="bg-cover w-full h-full "
            style={{ backgroundImage: `url(${data?.img})` }}>
            <div className=" bg-gradient-to-r from-black/70 to-black/10 w-full h-full">
              <div className="flex flex-col justify-center items-center md:w-9/12 lg:w-8/12 mx-auto h-full gap-6 md:gap-10">
                <h2 className="text-4xl sm:text-6xl text-white font-amaranth font-bold text-center">
                  {data?.headline}
                </h2>
                <h4 className="text-2xl sm:text-4xl font-bellefair text-white font-semibold text-center">
                  {data?.subheadline}
                </h4>
                <Link to={data?.link}>
                  <button className="bg-orange-500 px-5 py-3 rounded-lg text-white font-amaranth text-lg">
                    {data?.cta}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
