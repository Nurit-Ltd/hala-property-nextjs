"use client";

import { propertyImageSliderData } from "@/data/propertyImageSliderData";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SmallScreenSlider = () => {
  return (
    <div className="md:hidden relative">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        navigation={{
          nextEl: ".property-sm-custom-next-button",
          prevEl: ".property-sm-custom-prev-button",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {propertyImageSliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[203px]"
              />
              <div className="absolute left-4 bottom-2 flex items-center gap-2 z-20">
                {slide.buttons.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    className="h-[30px] px-3 py-1.5 rounded-md bg-black/[25%] border border-white/[60%] flex items-center justify-center gap-1 text-xs font-medium text-white app-button-box-pro"
                  >
                    <Image src={button.icon} alt={button.label} />
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          className="swiper-button-prev property-sm-custom-prev-button"
          aria-label="Previous Slide"
        >
          <div className="w-2.5 h-2.5">
            <FaArrowLeft />
          </div>
        </button>
        <button
          className="swiper-button-next property-sm-custom-next-button"
          aria-label="Next Slide"
        >
          <div className="w-2.5 h-2.5">
            <FaArrowRight />
          </div>
        </button>
      </Swiper>
    </div>
  );
};

export default SmallScreenSlider;
