"use client";
import { stepsCard } from "@/data/threeStepsCardData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ThreeStepDreamCard from "./ThreeStepDreamCard";
const ThreeStepDream = () => {
  return (
    <section className="bg-secBg">
      <div className="container_fluid">
        <div className="pt-6 pb-8 md:pt-15 md:pb-25">
          <h2 className="section-header-title text-darkBlue text-center">
            3 Steps to Find Your <span className="text-primary">Dream Home</span>
          </h2>
          <div className="hidden lg:block">
            <div className="mt-12 grid grid-cols-2 xl:grid-cols-3 gap-5">
              {stepsCard.map((step) => (
                <ThreeStepDreamCard key={step.id} step={step} />
              ))}
            </div>
          </div>
          {/* slider use for small screen */}
          <div className="mt-6 pt-6 lg:hidden">
            <Swiper
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (index, className) => {
                  return `<span className="${className} custom-bullet"></span>`;
                },
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {stepsCard.map((step) => (
                <SwiperSlide key={step.id} className="!pb-6 lg:pb-0">
                  <ThreeStepDreamCard key={step.id} step={step} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination mt-4 flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepDream;
