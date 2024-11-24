"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { elevatePropertyCardData } from "@/data/elevatePropertyCardData";

const ElevateSlider = () => {
  return (
    <div className="relative container_fluid mx-auto">
      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        className="overflow-hidden"
      >
        {elevatePropertyCardData.map((slide) => (
          <SwiperSlide key={slide.id} className="flex-shrink-0 h-[300px] cursor-pointer transition-all duration-1000 ease-in-out">
            <a href="#" className="relative h-full rounded-lg bg-cover bg-center">
              <Image src={slide.imageUrl} alt={slide.title} fill className="object-cover w-full h-full rounded-2xl" />
              <div
                className="absolute top-0 left-0 right-0 w-full h-full rounded-2xl opacity-90"
                style={{
                  background: "linear-gradient(0deg, #000000 3.31%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <h4 className="text-lg md:text-[32px] font-bold text-white">{slide.title}</h4>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous Button */}
      <button className="prev-button absolute left-4 bg-black/60 text-white p-2 rounded-full z-40 hover:bg-black transition">&#10094;</button>

      {/* Next Button */}
      <button className="next-button absolute right-4 bg-black/60 text-white p-2 rounded-full z-40 hover:bg-black transition">&#10095;</button>
    </div>
  );
};

export default ElevateSlider;
