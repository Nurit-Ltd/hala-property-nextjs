"use client";
import { ClearFilterIcon } from "@/components/shared/SVG";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const filtersData = [
  {
    title: "Property Type",
    options: [
      { id: "apartment", label: "Apartment", count: 987 },
      { id: "mansion", label: "Mansion", count: 238 },
      { id: "townhouse", label: "Townhouse", count: 367 },
      { id: "villa", label: "Villa", count: 182 },
      { id: "condo", label: "Condo", count: 641 },
      { id: "penthouse", label: "Penthouse", count: 224 },
    ],
  },
  {
    title: "City",
    options: [
      { id: "dubai", label: "Dubai" },
      { id: "abu-dhabi", label: "Abu Dhabi" },
      { id: "ajman", label: "Ajman" },
      { id: "sharjah", label: "Sharjah" },
      { id: "ras-al-khaimah", label: "Ras Al Khaimah" },
      { id: "fujairah", label: "Fujairah" },
    ],
  },
  {
    title: "Bedrooms",
    options: ["Any", "1", "2", "3", "4", "5+"],
    type: "buttonGroup",
  },
  {
    title: "Bathrooms",
    options: ["Any", "1", "2", "3", "4", "5+"],
    type: "buttonGroup",
  },
  {
    title: "Price Range",
    range: { min: 1000000, max: 8500000 },
    type: "rangeSlider",
  },
  {
    title: "Size Range",
    range: { min: 1250, max: 2350 },
    type: "rangeSlider",
  },
];

const FilterContent = ({ setOpen }) => {
  const [toggleFilters, setToggleFilters] = useState(
    filtersData.reduce((acc, filter) => {
      acc[filter.title] = true;
      return acc;
    }, {})
  );

  const [selectedBedrooms, setSelectedBedrooms] = useState("Any");
  const [selectedBathrooms, setSelectedBathrooms] = useState("Any");

  const [priceRange, setPriceRange] = useState([1000000, 8500000]);
  const [sizeRange, setSizeRange] = useState([1250, 2350]);

  const handleToggle = (title) => {
    setToggleFilters((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleRangeChange = (range, type) => {
    if (type === "price") {
      setPriceRange(range);
    } else {
      setSizeRange(range);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between gap-2 px-3 pb-4 border-b border-gray-200">
        <h5 className="font-bold">Filters</h5>
        <IoMdClose
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      </div>

      <div className="space-y-4">
        {filtersData.map((filter) => (
          <div
            key={filter.title}
            className="pb-4 mt-4 border-b border-[#E9EAEC]"
          >
            <div
              role="button"
              onClick={() => handleToggle(filter.title)}
              className="flex items-center justify-between gap-2"
            >
              <h5 className="font-bold">{filter.title}</h5>
              <button
                className={
                  toggleFilters[filter.title] ? "rotate-180" : "rotate-0"
                }
              >
                <MdKeyboardArrowDown />
              </button>
            </div>

            {toggleFilters[filter.title] && (
              <div className="mt-4 space-y-4">
                {filter.type === "buttonGroup" && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {filter.options.map((option) => (
                      <button
                        key={option}
                        onClick={() =>
                          filter.title === "Bedrooms"
                            ? setSelectedBedrooms(option)
                            : setSelectedBathrooms(option)
                        }
                        className={`px-3 py-1 text-sm border border-gray-300 rounded-lg 
                          ${
                            (filter.title === "Bedrooms" &&
                              selectedBedrooms === option) ||
                            (filter.title === "Bathrooms" &&
                              selectedBathrooms === option)
                              ? "bg-blue-600 text-white"
                              : "hover:bg-blue-100"
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {filter.type === "rangeSlider" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>
                        {filter.title === "Price Range"
                          ? `AED ${priceRange[0].toLocaleString()}`
                          : `${sizeRange[0]} SQF`}
                      </span>
                      <span>
                        {filter.title === "Price Range"
                          ? `AED ${priceRange[1].toLocaleString()}`
                          : `${sizeRange[1]} SQF`}
                      </span>
                    </div>
                    <RangeSlider
                      min={filter.range.min}
                      max={filter.range.max}
                      step={filter.title === "Price Range" ? 100000 : 50}
                      value={
                        filter.title === "Price Range" ? priceRange : sizeRange
                      }
                      onInput={(range) =>
                        handleRangeChange(
                          range,
                          filter.title === "Price Range" ? "price" : "size"
                        )
                      }
                      className="range-slider w-full"
                    />
                  </div>
                )}

                {!filter.type &&
                  filter.options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox id={option.id} />
                        <label
                          htmlFor={option.id}
                          className="filter-check-texts"
                        >
                          {option.label}
                        </label>
                      </div>
                      {option.count && (
                        <span className="filter-check-texts">
                          ({option.count})
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-between mt-4 gap-4">
          <Button
            variant="outline"
            className="text-[#04074E] gap-1"
          >
            <ClearFilterIcon /> Clear Filter
          </Button>
          <Button className="bg-primary text-white w-full">Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterContent;
