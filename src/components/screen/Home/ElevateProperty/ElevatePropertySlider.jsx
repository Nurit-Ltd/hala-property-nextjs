"use client";

import { elevatePropertyCardData } from "@/data/elevatePropertyCardData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ElevatePropertySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + elevatePropertyCardData.length) %
        elevatePropertyCardData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % elevatePropertyCardData.length);
  };

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const getSlideClasses = (index) => {
    const diff =
      (index - activeIndex + elevatePropertyCardData.length) %
      elevatePropertyCardData.length;
    console.log("index", index, "activeIndex", activeIndex, "diff", diff);

    if (diff === 0) return "w-[90%]  md:w-[562px] z-30  "; // Active
    if (diff === 1) return "w-[10%] md:w-[330px] z-20"; // Next
    if (diff === 2) return "hidden md:block md:w-[50px]  xl:w-[200px] z-10"; // Previous or 2nd next
    return "hidden md:block xl:w-[140px] opacity-50"; // Remaining
  };

  return (
    <div className="relative w-full flex items-center justify-center md:justify-start  container_fluid mx-auto overflow-hidden lg:overflow-visible">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 lg:-left-6 bg-white text-grey900 p-2 lg:p-4 rounded-full z-40 hover:bg-primary hover:text-white transition-all border border-white "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* Slider */}
      <div className="flex items-center w-full space-x-4">
        {elevatePropertyCardData.map((slide, index) => (
          <Link
            key={slide.id}
            href="/buy"
            className={`relative flex-shrink-0 h-[300px] rounded-lg bg-cover bg-center cursor-pointer transition-all duration-1000 ease-in-out ${getSlideClasses(
              slide.id
            )}`}
            onMouseEnter={() => handleHover(slide.id)}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover w-full rounded-2xl "
            />
            <div
              className="absolute top-0 left-0 right-0 opacity-90 w-full h-full rounded-2xl"
              style={{
                background:
                  "linear-gradient(0deg, #000000 3.31%, rgba(0, 0, 0, 0) 100%)",
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
              <h4 className="text-lg md:text-2xl font-bold text-white line-clamp-1 truncate text-ellipsis ">
                {slide.title}
              </h4>
              {/* <h5 className="text-xs md:text-sm text-white/[90%]">{slide.description}</h5> */}
            </div>
          </Link>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 lg:-right-6 bg-white text-grey900 p-2 lg:p-4 rounded-full z-40 hover:bg-primary hover:text-white transition-all border border-white "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.1716 10.9999H4V12.9999H16.1716L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default ElevatePropertySlider;
