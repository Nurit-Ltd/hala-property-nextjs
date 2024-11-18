"use client";

import { testimonials } from "@/data/ourClientData";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import worldMap from "../../../../assets/home/worldMap.svg";
import OurClientCard from "./OurClientCard";

const OurClients = () => {
  return (
    <section className="md:pt-20">
      <div className="bg-darkBlue py-8 md:py-20 relative">
        <h2 className="section-header-title text-white text-center relative z-20">What Our Clients Are Saying</h2>
        <div className="mt-5 md:mt-12 relative z-20">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={true} // Enable infinite loop for seamless rotation
            autoplay={{
              delay: 0, // Set delay to 0 for continuous scrolling
              disableOnInteraction: false, // Keep autoplay active after interaction
            }}
            speed={3000}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="swiper-slide-custom">
                <OurClientCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute inset-0 top-[-20px] flex items-center justify-center z-10">
          <Image src={worldMap} alt="worldMap" className="w-[259px] h-[230px] md:w-full md:h-full" />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
