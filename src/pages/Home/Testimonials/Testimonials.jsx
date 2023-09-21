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
        console.log(data);
        setTestimonials(data);
      });
  }, []);

  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h1 className="text-5xl   font-amita font-bold text-center">
        Testimonials
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="border-2 border-green-200 p-4 space-y-4 my-20 rounded-lg">
              <div className="flex items-center">
                <img
                  src={testimonial?.img}
                  alt={testimonial?.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="ml-8">
                  <h2 className="text-2xl font-semibold font-amaranth">
                    {testimonial?.name}
                  </h2>
                  <h4 className="text-lg font-medium font-amaranth">
                    {testimonial?.job}
                  </h4>
                </div>
              </div>
              <p>{testimonial?.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
