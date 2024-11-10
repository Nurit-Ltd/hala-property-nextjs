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
      <div className="xl:mt-[-130px] max-w-[1424px] mx-auto pt-12 pb-[60px] px-[72px] bg-white rounded-3xl luxury-properties">
        <h2 className="section-header-title text-darkBlue text-center">
          Luxury Properties{" "}
          <span className="text-primary">You&apos;ll Love</span>
        </h2>
        <div className="mt-10 relative">
          {/* Custom Navigation Buttons with Icons */}
          <button
            className="swiper-button-prev custom-prev-button"
            aria-label="Previous Slide"
          >
            <div className="w-5 h-5">
              <FaArrowLeft />
            </div>
          </button>
          <button
            className="swiper-button-next custom-next-button"
            aria-label="Next Slide"
          >
            <div className="w-5 h-5">
              <FaArrowRight />
            </div>
          </button>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
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
