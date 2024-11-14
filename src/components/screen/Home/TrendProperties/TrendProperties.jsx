"use client";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { cardData } from "@/data/productCardData";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const TrendProperties = () => {
  return (
    <section className="bg-white">
      <div className="container_fluid">
        <div className="pt-8 pb-8 md:pt-20 md:pb-18">
          <div className="flex flex-col items-center justify-center space-y-[6px] md:space-y-2">
            <h2 className="section-header-title text-center text-darkBlue">
              Trending <span className="text-primary">Properties</span>
            </h2>
            <h4 className="max-w-[784px] mx-auto text-sm md:text-lg text-grey700 text-center">
              Discover the most sought-after properties in real-time, powered by
              AI to bring you top picks based on current market demand and
              trends.
            </h4>
          </div>
          <div className="hidden lg:block">
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {cardData.map((card) => (
                <ProductCard key={card.id} card={card} />
              ))}
            </div>
          </div>
          {/* slider use for small screen */}
          <div className="mt-6 md:mt-12 relative lg:hidden">
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
          <div className="mt-12 flex items-center justify-center">
            <Link href={"./buy"} className="w-[144px] h-12 rounded-[40px] border border-darkBlue flex items-center justify-center gap-1 bg-transparent font-bold text-base text-darkBlue hover:bg-darkBlue hover:text-white duration-200">
              View More
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendProperties;
