"use client"

import { testimonials } from "@/data/ourClientData";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import worldMap from "../../../../assets/home/worldMap.svg";
import OurClientCard from "./OurClientCard";

const OurClients = () => {
  return (
    <section className="md:pt-20">
      <div className="bg-darkBlue py-8 md:py-20 relative">
        <h2 className="section-header-title text-white text-center relative z-30">
          What Our Clients Are Saying
        </h2>
        <div className="mt-12 relative z-30">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <OurClientCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image src={worldMap} alt="worldMap" />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
