import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  return (
    <div className="my-20 p-5 lg:p-0 max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-amita font-extrabold text-center ">
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Testimonials
        </span>
      </h1>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="border-2 border-green-200 p-4 space-y-4 my-16 sm:my-20 rounded-lg">
              <div className="flex items-center">
                <img
                  src={testimonial?.img}
                  alt={testimonial?.name}
                  className="w-16 sm:w-24 h-16 sm:h-24 rounded-full object-cover"
                />
                <div className="ml-8">
                  <h2 className="text-xl sm:text-2xl font-semibold font-amaranth">
                    {testimonial?.name}
                  </h2>
                  <h4 className="text-lg font-medium font-amaranth">
                    {testimonial?.job}
                  </h4>
                </div>
              </div>
              <p className="h-48 overflow-y-auto text-sm sm:text-base font-amaranth">
                {testimonial?.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
