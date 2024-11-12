"use client";
import { useState } from "react";
import FeaturesOfProperty from "./FeaturesOfProperty";
import FigureAndLocation from "./FigureAndLocation";

const NameAndFeatures = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section>
      <div className="space-y-[10px] md:space-y-6">
        {/* top-side */}
        <div className="space-y-[5px] md:space-y-3">
          <h2 className="text-xl md:text-[40px] md:leading-[56px] font-bold text-darkBlue">
            The Sanctury
          </h2>
          <div className="space-y-[1px] md:space-y-[2px]">
            <h4 className="text-xs md:text-base font-medium text-grey600">Starting price from</h4>
            <h3 className="property-text-title">AED 16,174,828</h3>
          </div>
          <div className="max-w-full">
            <h4
              className={`transition-all text-sm md:text-base ${
                isExpanded ? "h-auto" : "h-[60px] md:h-24 overflow-hidden"
              } text-ellipsis text-grey700`}
            >
              Luxurious Sanctuary villas in Mohammed Bin Rashid City offer
              lagoon, park, and Burj Khalifa views. Enjoy walking trails,
              upscale amenities, private gardens, and outdoor spaces. Live in
              Zen-inspired elegance. With a dazzling range of one, two and three
              bedroom apartments, The Boulevard offers you a chance to choose
              the lifestyle that’s perfect for you...
              {!isExpanded && (
                <span
                  onClick={handleToggle}
                  className="font-semibold text-grey700 cursor-pointer ml-2"
                >
                  View more
                </span>
              )}
            </h4>
          </div>
        </div>
        {/* middle-side */}
        <FigureAndLocation />
        {/* bottom or features */}
        <FeaturesOfProperty />
      </div>
    </section>
  );
};

export default NameAndFeatures;
