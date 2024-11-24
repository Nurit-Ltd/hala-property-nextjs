"use client";

import React, { useState } from "react";
import { elevatePropertyCardData } from "@/data/elevatePropertyCardData";
import Image from "next/image";

const ElevatePropertySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + elevatePropertyCardData.length) % elevatePropertyCardData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % elevatePropertyCardData.length);
  };

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const getSlideClasses = (index) => {
    const diff = (index - activeIndex + elevatePropertyCardData.length) % elevatePropertyCardData.length;
    console.log("index", index, "activeIndex", activeIndex, "diff", diff);

    if (diff === 0) return "w-[562px] z-30  "; // Active
    if (diff === 1) return "w-[330px] z-20"; // Next
    if (diff === 2) return "w-[200px] z-10"; // Previous or 2nd next
    return "w-[140px] opacity-50"; // Remaining
  };

  return (
    <div className="relative flex items-center   container_fluid mx-auto overflow-hidden">
      {/* Previous Button */}
      <button onClick={handlePrev} className="absolute left-4 bg-black/60 text-white p-2 rounded-full z-40 hover:bg-black transition">
        &#10094;
      </button>

      {/* Slider */}
      <div className="flex items-center space-x-4">
        {elevatePropertyCardData.map((slide, index) => (
          <a key={slide.id} href="#" className={`relative flex-shrink-0 h-[300px] rounded-lg bg-cover bg-center cursor-pointer transition-all duration-1000 ease-in-out ${getSlideClasses(slide.id)}`} onMouseEnter={() => handleHover(slide.id)}>
            <Image src={slide.imageUrl} alt={slide.title} fill className="object-cover w-full rounded-2xl " />
            <div
              className="absolute top-0 left-0 right-0 opacity-90 w-full h-full rounded-2xl"
              style={{
                background: "linear-gradient(0deg, #000000 3.31%, rgba(0, 0, 0, 0) 100%)",
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
              <h4 className="text-lg md:text-[32px] font-bold text-white">{slide.title}</h4>
              {/* <h5 className="text-xs md:text-sm text-white/[90%]">{slide.description}</h5> */}
            </div>
          </a>
        ))}
      </div>

      {/* Next Button */}
      <button onClick={handleNext} className="absolute right-4 bg-black/60 text-white p-2 rounded-full z-40 hover:bg-black transition">
        &#10095;
      </button>
    </div>
  );
};

export default ElevatePropertySlider;
