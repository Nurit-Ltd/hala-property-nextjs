"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import companyLogo1 from "../../../../assets/home/company-1.svg";
import companyLogo2 from "../../../../assets/home/company-2.svg";
import companyLogo3 from "../../../../assets/home/company-3.svg";
import companyLogo4 from "../../../../assets/home/company-4.svg";
import companyLogo5 from "../../../../assets/home/company-5.svg";

const OurPartner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-0 lg:px-12 2xl:px-0">
        <div className="pt-6 pb-10 md:pt-15 md:pb-15">
          <div className="space-y-2">
            <h2 className="section-header-title text-darkBlue text-center">
              Our <span className="text-primary">Partners</span>
            </h2>
            <h4 className="hidden md:block max-w-[1076px] mx-auto text-lg text-center text-grey700">We collaborate with industry leaders and innovators to bring the best solutions to our customers. Our trusted partners help us enhance our services, ensuring quality, reliability, and mutual success. Together, we achieve more.</h4>
          </div>
          <div className="hidden xl:block">
            <div className="mt-15 flex items-center justify-between">
              <Image src={companyLogo1} alt="companyLogo1" />
              <Image src={companyLogo2} alt="companyLogo2" />
              <Image src={companyLogo3} alt="companyLogo3" />
              <Image src={companyLogo4} alt="companyLogo4" />
              <Image src={companyLogo5} alt="companyLogo5" />
            </div>
          </div>
          <div className="mt-8 md:mt-15 xl:hidden flex items-center h-6">
            <Swiper
              spaceBetween={20}
              slidesPerView={3.1}
              centeredSlides={false}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper w-full items-center h-[23px]"
            >
              <SwiperSlide>
                <Image src={companyLogo1} alt="companyLogo1" className="h-[15px]" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={companyLogo5} alt="companyLogo5" className="h-[15px]" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={companyLogo3} alt="companyLogo3" className="h-[14px]" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={companyLogo4} alt="companyLogo4" className="h-[15px]" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={companyLogo5} alt="companyLogo5" className="h-[15px]" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
