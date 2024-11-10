"use client";

import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { cardData } from "@/data/productCardData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LuxuryProperties = () => {
  return (
    <section>
      <div className="xl:mt-[-130px] max-w-[1424px] mx-auto pt-6 pb-6 md:pt-12 md:pb-[60px] pl-4 pr-0 md:pl-[72px] md:pr-[72px] bg-white md:rounded-3xl luxury-properties">
        <h2 className="section-header-title text-darkBlue text-center pr-4 md:pr-0">
          Luxury Properties{" "}
          <span className="text-primary">You&apos;ll Love</span>
        </h2>
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
            spaceBetween={10} 
            slidesPerView={1.3}
            centeredSlides={false}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10, 
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
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {cardData.map((card) => (
              <SwiperSlide key={card.id}>
                <ProductCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LuxuryProperties;
