"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const developersData = [
  { id: "predovic", label: "Predovic and Sons", count: 987 },
  { id: "beer-zieme", label: "Beer - Zieme", count: 238 },
  { id: "hilll-sons", label: "Hilll and Sons", count: 367 },
  { id: "ward-sons", label: "Ward and Sons", count: 182 },
  { id: "kertzmann-kiehn", label: "Kertzmann - Kiehn", count: 641 },
  { id: "wisozk-sons", label: "Wisozk and Sons", count: 224 },
];

const SearchFilterContent = ({ setOpen }) => {
  const [toggleFilters, setToggleFilters] = useState({
    priceRange: true,
    developers: true,
  });
  const [priceRange, setPriceRange] = useState([1600000, 8500000]);
  const [selectedDevelopers, setSelectedDevelopers] = useState({});

  const handleToggle = (filterName) => {
    setToggleFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleRangeChange = (range) => {
    setPriceRange(range);
  };

  const handleDeveloperChange = (id) => {
    setSelectedDevelopers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between gap-2 px-3 pb-4 border-b border-gray-200">
        <h5 className="font-bold">More</h5>
        <IoMdClose
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      </div>

      <div className="mt-4 space-y-4">
        {/* Price Range Section */}
        <div className="pb-4 border-b border-[#E9EAEC]">
          <div
            role="button"
            onClick={() => handleToggle("priceRange")}
            className="flex items-center justify-between gap-2"
          >
            <h5 className="font-bold">Price Range</h5>
            <button
              className={toggleFilters.priceRange ? "rotate-180" : "rotate-0"}
            >
              <MdKeyboardArrowDown />
            </button>
          </div>

          {toggleFilters.priceRange && (
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>AED {priceRange[0].toLocaleString()}</span>
                <span>AED {priceRange[1].toLocaleString()}</span>
              </div>
              <RangeSlider
                min={1600000}
                max={8500000}
                step={100000}
                value={priceRange}
                onInput={handleRangeChange}
                className="range-slider w-full"
              />
            </div>
          )}
        </div>

        {/* Developers Section */}
        <div className="pb-4 border-b border-[#E9EAEC]">
          <div
            role="button"
            onClick={() => handleToggle("developers")}
            className="flex items-center justify-between gap-2"
          >
            <h5 className="font-bold">Developers</h5>
            <button
              className={toggleFilters.developers ? "rotate-180" : "rotate-0"}
            >
              <MdKeyboardArrowDown />
            </button>
          </div>

          {toggleFilters.developers && (
            <div className="mt-4 space-y-4">
              {developersData.map((developer) => (
                <div
                  key={developer.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={developer.id}
                      checked={selectedDevelopers[developer.id] || false}
                      onChange={() => handleDeveloperChange(developer.id)}
                      className="checkbox cursor-pointer"
                    />
                    <label
                      htmlFor={developer.id}
                      className="filter-check-texts"
                    >
                      {developer.label}
                    </label>
                  </div>
                  <span className="filter-check-texts">
                    ({developer.count})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center mt-4">
          <Button className="bg-primary w-full">Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterContent;
