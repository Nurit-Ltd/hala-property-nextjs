"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import property2 from "../../../../assets/property-details/property2.jpeg";
import property3 from "../../../../assets/property-details/property3.jpeg";
import property1 from "../../../../assets/property-details/propertyOne.jpeg";

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
        <SwiperSlide>
          <Image src={property1} alt="property1" className="w-full h-[203px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={property2} alt="property2" className="w-full h-[203px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={property3} alt="property3" className="w-full h-[203px]" />
        </SwiperSlide>
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
