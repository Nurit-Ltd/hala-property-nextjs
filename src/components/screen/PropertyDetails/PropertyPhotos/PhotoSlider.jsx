"use client"
import { propertyImages } from "@/data/propertyImages";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyPhotos from "./PropertyPhotos";

export default function PhotoSlider({ photos }) {
  return (
    <section>
      <div className="mt-24">
        <div className="container_fluid">
          <div className="pt-15">
            <div className="mt-4 md:mt-10 relative">
              {/* Custom Navigation Buttons with Icons - hidden on small screens */}
              <button
                className="swiper-button-prev custom-prev-button !hidden lg:!flex"
                aria-label="Previous Slide"
              >
                <div className="w-5 h-5">
                  <FaArrowLeft />
                </div>
              </button>
              <button
                className="swiper-button-next custom-next-button !hidden lg:!flex"
                aria-label="Next Slide"
              >
                <div className="w-5 h-5">
                  <FaArrowRight />
                </div>
              </button>

              <Swiper
                slidesPerView={1}
                centeredSlides={false}
                navigation={{
                  nextEl: ".custom-next-button",
                  prevEl: ".custom-prev-button",
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
      </div>
    </section>
  );
}
