"use client";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/ui/location-search";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { heroItems } from "@/data/heroData";
import Image from "next/image";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import searchIcon from "../../../../assets/home/hero-search-icon.svg";

const LocationArea = SearchBar;

const formatToMillion = (number) => {
  return `${(number / 1000000).toFixed(1)} MN`; // Format numbers to "X.X MN"
};

const Hero = () => {
  const [selectedBedrooms, setSelectedBedrooms] = useState("Select bedrooms");
  const [priceRange, setPriceRange] = useState(null); // Initially null to show "Set your budget"

  // Determine initial placeholder for selectedBedrooms based on screen size
  useEffect(() => {
    const matchMediaQuery = window.matchMedia("(max-width: 767px)");
    if (matchMediaQuery.matches) {
      setSelectedBedrooms("Any");
    }
    const handleMediaChange = (e) => {
      setSelectedBedrooms(e.matches ? "Select bedrooms" : "Any");
    };
    matchMediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      matchMediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const handlePriceChange = (range) => {
    setPriceRange(range); // Update price range when user interacts with the slider
  };

  const handleBedroomSelect = (bed) => {
    setSelectedBedrooms(bed);
  };

  return (
    <section className="mt-15 lg:mt-24 bg-[url('/hero-banner.png')] w-full h-[292px] lg:h-[700px] bg-no-repeat bg-cover flex items-center justify-center">
      <div className="container_fluid">
        <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-8">
          <div className="max-w-[903px] mx-auto space-y-2 lg:space-y-3">
            <h1 className="text-2xl lg:text-[54px] lg:leading-[93px] font-Merriweather font-bold text-white text-center">
              The Future of Real Estate
            </h1>
            <h3 className="max-w-max sm:max-w-[520px] lg:max-w-[777px] mx-auto text-sm leading-[18px] lg:text-xl lg:leading-[150%] text-center text-white">
              Experience a smarter, faster way to find your perfect property.
              Discover luxurious homes and investment opportunities tailored to
              your lifestyle, all at your fingertips.
            </h3>
          </div>
          <div className="h-12 lg:h-[98px] pr-2.5 lg:pr-6 bg-white border-[.5px] border-[#F4F4F4] hero-info-box rounded-full flex items-center justify-between gap-5 lg:gap-12">
            <div className="flex items-center">
              <LocationArea />
              {heroItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5"
                >
                  <Select>
                    <SelectTrigger className="w-full lg:min-w-[140px] text-sm border-none bg-transparent ring-0 focus:ring-0 outline-none shadow-none flex items-center gap-2 text-grey600">
                      <Image
                        src={item.icon}
                        alt={`${item.title}-hero`}
                        className="w-4 h-4 lg:w-7 lg:h-7"
                      />
                      <div className="flex flex-col items-start">
                        <h4 className="hidden text-left lg:block text-sm leading-[19px] lg:text-lg lg:leading-[25px] font-semibold lg:font-bold text-[#04074E]">
                          {item.title}
                        </h4>
                        {item.title === "Bedrooms" ? (
                          <span>{selectedBedrooms}</span>
                        ) : priceRange ? (
                          <span>
                            AED {formatToMillion(priceRange[0])} - AED{" "}
                            {formatToMillion(priceRange[1])}
                          </span>
                        ) : (
                          <>
                            <span className="hidden md:inline-block">
                              Set your budget
                            </span>
                            <span className="inline-block md:hidden">
                              Budget
                            </span>
                          </>
                        )}
                      </div>
                    </SelectTrigger>
                    <SelectContent className="p-4 border rounded-md shadow-lg bg-white">
                      {item.type === "buttonGroup" && (
                        <div>
                          <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">
                              {item.title}
                            </h5>
                            <button
                              className="text-primary text-sm"
                              onClick={() =>
                                setSelectedBedrooms("Select bedrooms")
                              }
                            >
                              Reset
                            </button>
                          </div>
                          <div className="flex mt-4 border border-[#CBD5E0] rounded-[6px] overflow-hidden">
                            {item.options.map((option) => (
                              <button
                                key={option}
                                onClick={() => handleBedroomSelect(option)}
                                className={`px-4 lg:px-6 py-1.5 border-r border-[#CBD5E0] last:border-none ${
                                  selectedBedrooms === option
                                    ? "bg-[#CBD5E0] text-primary"
                                    : "text-gray-700"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.type === "rangeSlider" && (
                        <div className="mb-1">
                          <h5 className="text-lg font-semibold">
                            {item.title}
                          </h5>
                          <div className="flex justify-between gap-2 text-sm text-gray-500 mt-4">
                            <span className="bg-[#F1F2F4] border border-grey400 py-0.5 px-2 w-full rounded-[4px] text-xs text-grey700">
                              {priceRange
                                ? `AED ${formatToMillion(priceRange[0])}`
                                : "Set minimum"}
                            </span>
                            <span className="bg-[#F1F2F4] border border-grey400 py-1 px-2 w-full rounded-[4px] text-xs text-grey700">
                              {priceRange
                                ? `AED ${formatToMillion(priceRange[1])}`
                                : "Set maximum"}
                            </span>
                          </div>
                          <RangeSlider
                            min={500000}
                            max={8500000}
                            step={100000}
                            value={priceRange || [500000, 8500000]}
                            onInput={handlePriceChange}
                            className="range-slider w-full mt-4"
                          />
                        </div>
                      )}
                    </SelectContent>
                  </Select>
                  {index < heroItems.length - 1 && (
                    <div className="w-[1px] h-5 lg:h-8 mx-1.5 lg:mx-5 bg-grayLine"></div>
                  )}
                </div>
              ))}
            </div>
            <Button className="w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-primary hover:scale-95 transition-all duration-300 hero-search-box p-0 flex items-center justify-center">
              <Image
                src={searchIcon}
                alt="searchIcon"
                className="w-3 h-3 lg:w-7 lg:h-7"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
