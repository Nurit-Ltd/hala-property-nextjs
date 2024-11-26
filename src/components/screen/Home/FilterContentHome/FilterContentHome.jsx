"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const filtersData = [
  {
    title: "Bedrooms",
    options: ["Any", "1", "2", "3", "4", "5+"],
    type: "buttonGroup",
  },
  {
    title: "Price Range",
    range: { min: 1000000, max: 8500000 },
    type: "rangeSlider",
  },
];

const FilterContentHome = ({ setOpen }) => {
  const initialState = {
    toggleFilters: filtersData.reduce((acc, filter) => {
      acc[filter.title] = true;
      return acc;
    }, {}),
    selectedBedrooms: "Any",
    selectedBathrooms: "Any",
    priceRange: [1000000, 8500000],
    sizeRange: [1250, 2350],
    checkedItems: {},
  };
  const router = useRouter();

  const [toggleFilters, setToggleFilters] = useState(
    initialState.toggleFilters
  );
  const [selectedBedrooms, setSelectedBedrooms] = useState(
    initialState.selectedBedrooms
  );
  const [selectedBathrooms, setSelectedBathrooms] = useState(
    initialState.selectedBathrooms
  );
  const [priceRange, setPriceRange] = useState(initialState.priceRange);
  const [sizeRange, setSizeRange] = useState(initialState.sizeRange);
  const [checkedItems, setCheckedItems] = useState(initialState.checkedItems);

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

  const handleChecked = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetFilters = () => {
    setToggleFilters(initialState.toggleFilters);
    setSelectedBedrooms(initialState.selectedBedrooms);
    setSelectedBathrooms(initialState.selectedBathrooms);
    setPriceRange(initialState.priceRange);
    setSizeRange(initialState.sizeRange);
    setCheckedItems(initialState.checkedItems);
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between gap-2 px-3 pb-4 border-b border-gray-200">
        <h5 className="font-bold">Filters</h5>
        <IoMdClose
          onClick={() => setOpen(false)}
          className="cursor-pointer hover:rotate-90 transition-all"
        />
      </div>

      <div className="space-y-4 flex flex-col justify-between h-[calc(100vh-160px)]">
        <div>
          {filtersData.map((filter) => (
            <div
              key={filter.title}
              className="pb-4 mt-4 border-b border-[#E9EAEC]"
            >
              {toggleFilters[filter.title] && (
                <div className="mt-4 space-y-4">
                  <h4 className="font-bold text-grey900">{filter.title}</h4>
                  {filter.type === "buttonGroup" && (
                    <div className="flex items-center rounded-lg overflow-hidden border">
                      {filter.options.map((option) => (
                        <button
                          key={option}
                          onClick={() =>
                            filter.title === "Bedrooms"
                              ? setSelectedBedrooms(option)
                              : setSelectedBathrooms(option)
                          }
                          className={`px-3 w-full py-1 text-sm border-r last:border-r-0 border-gray-300 inline-block  
                          ${
                            (filter.title === "Bedrooms" &&
                              selectedBedrooms === option) ||
                            (filter.title === "Bathrooms" &&
                              selectedBathrooms === option)
                              ? "bg-primary text-white"
                              : "hover:bg-blue-50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  {filter.type === "rangeSlider" && (
                    <div className="space-y-4">
                      {filter.title === "Price Range" && (
                        <div className="flex justify-between gap-2 text-sm text-gray-500">
                          <Button
                            variant="outline"
                            className="bg-[#F1F2F4] justify-between  border border-grey400  py-0.5 px-2 w-full rounded-[4px] text-xs text-grey700"
                          >
                            {filter.title === "Price Range" &&
                              `AED ${priceRange[0].toLocaleString()}`}
                            <IoMdClose />
                          </Button>
                          <Button
                            variant="outline"
                            className="bg-[#F1F2F4]  justify-between border border-grey400  py-1 px-2 w-full rounded-[4px] text-xs text-grey700"
                          >
                            {filter.title === "Price Range" &&
                              `AED ${priceRange[1].toLocaleString()}`}
                            <IoMdClose />
                          </Button>
                        </div>
                      )}
                      <RangeSlider
                        min={filter.range.min}
                        max={filter.range.max}
                        step={filter.title === "Price Range" ? 100000 : 50}
                        value={
                          filter.title === "Price Range"
                            ? priceRange
                            : sizeRange
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

                  {filter.type === "sizeRangeSelect" && (
                    <div className="space-y-4">
                      <div className="flex justify-between gap-2 text-sm text-gray-500">
                        <Button
                          variant="outline"
                          className="bg-[#F1F2F4] justify-between  border border-grey400  py-0.5 px-2 w-full rounded-[4px] text-xs text-grey700"
                        >
                          {filter.title === "Size Range" &&
                            `${sizeRange[0].toLocaleString()} SQF`}
                          <IoMdClose />
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-[#F1F2F4]  justify-between border border-grey400  py-1 px-2 w-full rounded-[4px] text-xs text-grey700"
                        >
                          {filter.title === "Size Range" &&
                            `${sizeRange[1].toLocaleString()} SQF`}
                          <IoMdClose />
                        </Button>
                      </div>
                      <RangeSlider
                        min={filter.range.min}
                        max={filter.range.max}
                        step={50}
                        value={sizeRange}
                        onInput={(range) => handleRangeChange(range, "size")}
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
                          <Checkbox
                            onChange={() => handleChecked(option.id)}
                            id={option.id}
                            checked={!!checkedItems[option.id]} // Default to false if undefined
                          />
                          <label
                            htmlFor={option.id}
                            className="filter-check-texts cursor-pointer"
                            onClick={() => handleChecked(option.id)}
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
        </div>

        <div className="flex justify-between mt-4 gap-4">
          {/*     <Button
            variant="outline"
            className="text-[#04074E] gap-1"
            onClick={resetFilters}
          >
            <ClearFilterIcon /> Clear Filter
          </Button> */}
          <Button
            onClick={() => {
              setOpen(false);
              router.push("/buy");
            }}
            className="bg-primary text-white w-full"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterContentHome;
