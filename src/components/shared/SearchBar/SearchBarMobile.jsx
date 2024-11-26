"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";
import { FilterIcon, LocationIcon, SearchIcon } from "../SVG";

const locations = [
  { name: "42419 McKenzie Causeway", city: "Cali Mount" },
  { name: "90030 Ethyl Passage", city: "Ramon Extension" },
  { name: "416 Genevieve Freeway", city: "Donald Forks" },
  { name: "Dubai Marina", city: "Dubai" },
  { name: "Downtown Dubai", city: "Dubai" },
  { name: "Business Bay", city: "Dubai" },
  { name: "Palm Jumeirah", city: "Dubai" },
  { name: "Jumeirah Beach", city: "Dubai" },
  { name: "Al Barsha", city: "Dubai" },
  { name: "Al Nahda", city: "Dubai" },
];

const SearchBarMobile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setInputFocus(false); // Close the dropdown if clicked outside
  });

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location.name); // Update selected location
    setSearchQuery(""); // Clear the search query
    setInputFocus(false); // Close the dropdown
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "e") {
        event.preventDefault();
        setInputFocus(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="w-full bg-white rounded-[32px] p-2 h-12 relative"
      ref={ref}
    >
      <div className="flex items-center gap-2 justify-between">
        <div className="rounded-[24px] border border-grey300 py-2 pl-3 pr-2 bg-white w-full flex-1">
          <div className="flex items-center gap-2">
            <LocationIcon className="text-grey600 w-4" />
            <input
              type="text"
              name="location"
              id="location"
              className="border-none placeholder:text-grey600 text-xs flex-1 outline-none"
              placeholder="Location"
              onFocus={() => setInputFocus(true)}
              value={inputFocus ? searchQuery : selectedLocation} // Show selected location when not searching
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon
              role="search"
              className="text-grey600 w-4 cursor-pointer"
            />
          </div>

          {/* Show filtered location suggestions */}
          {inputFocus && searchQuery && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location, index) => (
                  <div
                    key={index}
                    onClick={() => handleLocationSelect(location)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    <p className="text-sm">{location.name}</p>
                    <p className="text-xs text-gray-500">{location.city}</p>
                  </div>
                ))
              ) : (
                <div className="p-2 text-sm text-gray-500">Not found</div>
              )}
            </div>
          )}
        </div>
        <div className="cursor-pointer w-8 h-8 py-1.5 px-2 bg-primary rounded-[24px] inline-flex items-center justify-center text-white">
          <FilterIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBarMobile;
