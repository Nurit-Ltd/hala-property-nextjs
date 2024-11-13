"use client";
import { propertyImages } from "@/data/propertyImages";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyPhotos from "./PropertyPhotos";
import SmallScreenSlider from "./SmallScreenSlider";

export default function PhotoSlider({ photos }) {
  return (
    <section className="mt-15 lg:mt-24">
      
        <div className="container_fluid">
          <div className="md:pt-15">
            <div className="hidden md:block relative">
              <button
                className="swiper-button-prev property-custom-prev-button"
                aria-label="Previous Slide"
              >
                <div className="w-3 h-3 xl:w-5 xl:h-5">
                  <FaArrowLeft />
                </div>
              </button>
              <button
                className="swiper-button-next property-custom-next-button"
                aria-label="Next Slide"
              >
                <div className="w-3 h-3 xl:w-5 xl:h-5">
                  <FaArrowRight />
                </div>
              </button>

              <Swiper
                slidesPerView={1}
                centeredSlides={false}
                navigation={{
                  nextEl: ".property-custom-next-button",
                  prevEl: ".property-custom-prev-button",
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {propertyImages.map((propertyImage) => (
                  <SwiperSlide key={propertyImage.id}>
                    <PropertyPhotos propertyImage={propertyImage} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
     
      <div className="md:hidden">
        <SmallScreenSlider />
      </div>
    </section>
  );
}
