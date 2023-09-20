import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  useEffect(() => {
    fetch("hero.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHeroData(data);
      });
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-screen w-full">
      {heroData.map((data) => (
        <SwiperSlide key={data.id}>
          <div
            className="bg-cover w-full h-full"
            style={{ backgroundImage: `url(${data?.img})` }}>
            <div className=" bg-gradient-to-r from-black/70 to-black/10 w-full h-full">
              <div className="flex flex-col justify-center items-center w-8/12 mx-auto h-full  gap-10">
                <h2 className="text-6xl text-white font-amaranth font-bold text-center">
                  {data.headline}
                </h2>
                <h4 className="text-4xl font-bellefair text-white font-semibold text-center">
                  {data.subheadline}
                </h4>
                <button className="bg-orange-500 px-5 py-3 rounded-lg text-white font-amaranth text-lg">
                  {data.cta}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
