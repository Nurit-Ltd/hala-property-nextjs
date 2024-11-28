"use client";
import { elevatePropertyCardData } from "@/data/elevatePropertyCardData";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import shapesText from "../../../../assets/home/shapes.svg";
import ElevatePropertyCard from "./ElevatePropertyCard";

const ElevateProperty = () => {
  return (
    <section className="bg-secBg overflow-hidden">
      <div className="container_fluid">
        <div className="pt-8 pb-6 md:pt-25 md:pb-20 grid grid-cols-1 xl:grid-cols-5 gap-8 items-center">
          {/* Left Section: 40% */}
          <div className="xl:col-span-2 space-y-2 md:space-y-4">
            <div>
              <h2 className="section-header-title xl:text-[42px] 2xl:text-[46px] text-darkBlue text-center xl:text-start">
                Elevate{" "}
                <span className="relative">
                  your
                  <div className="absolute right-[-20px] md:right-[-18px] xl:right-[-45px] top-[-5px] md:top-[-2px] xl:top-[-15px]">
                    <Image
                      src={shapesText}
                      alt="shapesText"
                      className="w-5 h-5 xl:w-[45px] xl:h-[45px]"
                    />
                  </div>
                </span>
              </h2>
              <h2 className="section-header-title xl:text-[42px]  2xl:text-[46px] text-primary text-center xl:text-start">
                Property Experiences
              </h2>
            </div>
            <div>
              <h4 className="text-sm md:text-lg text-grey700 text-center xl:text-start">
                &quot;Elevate your property experiences with cutting-edge
                technology and personalized services that bring luxury,
                efficiency, and ease to your space. From seamless automation to
                tailored management solutions, we redefine how you interact with
                your property, ensuring every moment is optimized for comfort
                and convenience.&quot;
              </h4>
            </div>
          </div>

          {/* Right Section: 60% */}
          <div className="xl:col-span-3 mt-6 md:mt-10 xl:mt-0">
            <Swiper
              spaceBetween={16}
              slidesPerView={1.1}
              centeredSlides={false}
              breakpoints={{
                480: {
                  slidesPerView: 1.4,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 1.3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
                el: ".custom-ele-pagination",
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-ele-bullet"></span>`;
                },
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper w-full"
            >
              {elevatePropertyCardData.map((card) => (
                <SwiperSlide
                  key={card.id}
                  className="flex justify-center !pb-6 lg:pb-0"
                >
                  <ElevatePropertyCard card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-ele-pagination mt-4 flex items-center justify-center xl:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevateProperty;
