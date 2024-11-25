"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shapesText from "../../../../assets/home/shapes.svg";
import ElevatePropertySlider from "./ElevatePropertySlider";

const ElevateProperty = () => {
  return (
    <section className="bg-secBg overflow-hidden pt-[32px] xl:pt-[100px] pb-[24px] xl:pb-[80px]">
      {" "}
      {/* Added overflow-hidden */}
      <div className="container_fluid">
        <div className="  space-y-2 md:space-y-4 max-w-[920px] mx-auto text-center">
          <div>
            <h2 className="section-header-title text-darkBlue text-center  ">
              Elevate your{" "}
              <span className="section-header-title text-primary   relative">
                Property Experiences{" "}
                <span className="absolute right-[-20px] md:right-[-18px] xl:right-[-45px] top-[-5px] md:top-[-2px] xl:top-[-15px]">
                  <Image
                    src={shapesText}
                    alt="shapesText"
                    className="w-5 h-5 xl:w-[45px] xl:h-[45px]"
                  />
                </span>
              </span>
            </h2>
          </div>
          <div>
            <h4 className="text-sm md:text-lg text-grey700 text-center  ">
              &quot;Elevate your property experiences with cutting-edge
              technology and personalized services that bring luxury,
              efficiency, and ease to your space. From seamless automation to
              tailored management solutions, we redefine how you interact with
              your property, ensuring every moment is optimized for comfort and
              convenience.&quot;
            </h4>
          </div>
        </div>
        <div className="pt-8 pb-6 md:pt-25 md:pb-20  mt-6 md:mt-10 xl:mt-0 w-full">
          <ElevatePropertySlider />
        </div>
      </div>
    </section>
  );
};

export default ElevateProperty;
