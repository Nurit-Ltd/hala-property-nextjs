"use client";
import locationIcon from "@/assets/home/location-hero.svg";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

// react icons
import Image from "next/image";

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

const LocationSearch = ({ className }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    "Choose your area..."
  );

  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "e") {
        event.preventDefault(); // Prevent browser's default search bar opening
        if (ref.current) {
          setInputFocus(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true }); // Capture phase added

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [inputFocus, ref]);

  useOutsideClick(ref, () => setInputFocus(false));

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location.name); // Update selected location
    setSearchQuery(""); // Clear the search query
    setInputFocus(false); // Close the dropdown
  };

  return (
    <div
      className={cn("relative flex items-center ", className)}
      ref={ref}
    >
      <div className="px-2.5 lg:px-6 flex items-center gap-[5px] lg:gap-3 ">
        <Image
          src={locationIcon}
          alt={`location-hero`}
          className="w-4 h-4 lg:w-7 lg:h-7"
        />
        <div className="flex flex-col">
          <h4 className="hidden text-left lg:block text-sm leading-[19px] lg:text-lg lg:leading-[25px] font-semibold lg:font-bold text-grey600 lg:text-darkBlue">
            Location
          </h4>
          <input
            className="p-0 border-none w-full outline-none placeholder:text-grey600 text-grey600 text-sm"
            placeholder="Choose your area..."
            onFocus={() => setInputFocus(true)}
            value={inputFocus ? searchQuery : selectedLocation} // Show selected location when not searching
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div
        className={`${
          inputFocus
            ? "opacity-100 h-auto translate-y-0 mt-2"
            : "translate-y-[-10px] opacity-0 h-0"
        } bg-white border border-gray-200 w-[300px] 2xl:w-[460px] transition-all duration-500 overflow-hidden flex flex-col rounded-md absolute top-7 lg:top-[65px] left-0 z-10`}
      >
        <div>
          <div className="p-4">
            <div>
              <p className="text-base text-[#1F2937] font-bold">
                Recent Locations
              </p>
              <div className="mt-4 h-[200px] overflow-y-auto">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location, index) => (
                    <div
                      key={index}
                      role="button"
                      onClick={() => handleLocationSelect(location)}
                      className="flex items-center gap-4 p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                          stroke="#687588"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                          stroke="#687588"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          {location.name}
                        </h3>
                        <p className="text-sm text-gray-500">{location.city}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-rose-400">Not found!</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1px] h-5 lg:h-8 mx-1.5 lg:mx-5 bg-grayLine"></div>
    </div>
  );
};

export default LocationSearch;
