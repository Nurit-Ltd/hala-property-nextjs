"use client";

import SearchFilterContent from "@/components/screen/Buy/SearchFilterContent";
import FilterDrawer from "@/components/shared/FilterDrawer";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import {
  DiamondIcon,
  NewIcon,
  RatingIcon,
  RentalIcon,
  RoIcon,
} from "@/components/shared/SVG";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cardData } from "@/data/productCardData";
import { cn } from "@/lib/utils";
import { ChevronDown, MapIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { HiViewList } from "react-icons/hi";

const MapViewPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isMapView, setIsMapView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Define an array of tab objects
  const tabs = [
    { id: 1, label: "In Demand", icon: <DiamondIcon /> },
    { id: 2, label: "ROI", icon: <RoIcon /> },
    { id: 3, label: "Project Rating", icon: <RatingIcon /> },
    { id: 4, label: "New", icon: <NewIcon /> },
    { id: 5, label: "Rental Yield", icon: <RentalIcon /> },
  ];
  return (
    <div className="mt-15 lg:mt-24  overflow-hidden w-full relative">
      <div className="hidden lg:block">
        <div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <Image
                alt="map-view"
                width={1728}
                height={1433}
                className="gmap_iframe h-screen lg:h-full w-full object-cover object-left-top"
                src="/map.png"
              />
            </div>
          </div>
        </div>

        <div>
          {/* tabs */}
          <div className="lg:absolute top-6 left-24 ">
            <div className="flex items-center gap-4 rounded-[42px] p-3 bg-white">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant="outline"
                  className={cn(
                    "rounded-full  bg-[#F6F5F1] text-[#323B49] border-grey400 py-2.5 px-4 gap-2",
                    activeTab === tab.id &&
                      "bg-primary/5 text-primary border border-primary"
                  )}
                >
                  {tab.icon} {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* cards  */}
          <div className="lg:absolute top-28 desk:top-6  bg-white border border-grey400 drop-shadow  max-w-[750px] w-full left-24 desk:left-auto  desk:right-16 bottom-8 overflow-y-scroll custom-scrollbar-tab rounded-[16px]">
            <div className="p-4 ">
              <div className="flex items-center justify-between gap-1.5">
                <div>
                  <Select>
                    <SelectTrigger className="w-full gap-16 font-semibold">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="shop">Shop</SelectItem>
                      <SelectItem value="warehouse">Warehouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* city */}
                <div className="hidden sm:block">
                  <Select>
                    <SelectTrigger className="w-full gap-10 font-semibold">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dubai">Dubai</SelectItem>
                      <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                      <SelectItem value="Sharjah">Sharjah</SelectItem>
                      <SelectItem value="Ajman">Ajman</SelectItem>
                      <SelectItem value="Umm Al Quwain">
                        Umm Al Quwain
                      </SelectItem>
                      <SelectItem value="Ras Al Khaimah">
                        Ras Al Khaimah
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* price */}
                <div className="hidden md:block">
                  <Select>
                    <SelectTrigger className="w-full gap-10 font-semibold">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100000">AED 100,000</SelectItem>
                      <SelectItem value="200000">AED 200,000</SelectItem>
                      <SelectItem value="300000">AED 300,000</SelectItem>
                      <SelectItem value="400000">AED 400,000</SelectItem>
                      <SelectItem value="500000">AED 500,000</SelectItem>
                      <SelectItem value="600000">AED 600,000</SelectItem>
                      <SelectItem value="700000">AED 700,000</SelectItem>
                      <SelectItem value="800000">AED 800,000</SelectItem>
                      <SelectItem value="900000">AED 900,000</SelectItem>
                      <SelectItem value="1000000">AED 1,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Developers */}
                <div className="hidden lg:block">
                  <Select>
                    <SelectTrigger className="w-full gap-10 font-semibold">
                      <SelectValue placeholder="Developers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Developer 1">Developer 1</SelectItem>
                      <SelectItem value="Developer 2">Developer 2</SelectItem>
                      <SelectItem value="Developer 3">Developer 3</SelectItem>
                      <SelectItem value="Developer 4">Developer 4</SelectItem>
                      <SelectItem value="Developer 5">Developer 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {cardData.map((card) => (
                  <ProductCard
                    key={card.id}
                    card={card}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="block lg:hidden">
        <div className={`${isMapView ? "block" : "hidden"}`}>
          <div className="mapouter">
            <div className="gmap_canvas">
              <Image
                alt="map-view"
                width={1728}
                height={1433}
                className="gmap_iframe h-screen lg:h-full w-full object-cover object-left-top"
                src="/map.png"
              />
            </div>
          </div>
        </div>

        <div className={`${isMapView ? "hidden" : "block"}`}>
          {/* tabs */}
          <div className="lg:absolute top-6 left-24 overflow-hidden">
            <div className="flex items-center gap-4 rounded-[42px] p-3 bg-white overflow-y-scroll custom-scrollbar-tab">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant="outline"
                  className={cn(
                    "rounded-full  bg-[#F6F5F1] text-[#323B49] border-grey400 py-2.5 px-4 gap-2",
                    activeTab === tab.id &&
                      "bg-primary/5 text-primary border border-primary"
                  )}
                >
                  {tab.icon} {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* cards  */}
          <div className="lg:absolute top-28 desk:top-6  bg-white border border-grey400 drop-shadow  max-w-[750px] w-full left-24 desk:left-auto  desk:right-16 bottom-8 overflow-y-scroll custom-scrollbar-tab rounded-[16px]">
            <div className="p-4 ">
              <div className="flex items-center justify-between gap-1.5">
                <div>
                  <Select>
                    <SelectTrigger className="w-full gap-16 font-semibold">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="shop">Shop</SelectItem>
                      <SelectItem value="warehouse">Warehouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* city */}
                <div className="hidden sm:block">
                  <Select>
                    <SelectTrigger className="w-full gap-10 font-semibold">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dubai">Dubai</SelectItem>
                      <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                      <SelectItem value="Sharjah">Sharjah</SelectItem>
                      <SelectItem value="Ajman">Ajman</SelectItem>
                      <SelectItem value="Umm Al Quwain">
                        Umm Al Quwain
                      </SelectItem>
                      <SelectItem value="Ras Al Khaimah">
                        Ras Al Khaimah
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* price */}
                <div className="hidden md:block">
                  <Select>
                    <SelectTrigger className="w-full gap-10 font-semibold">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100000">AED 100,000</SelectItem>
                      <SelectItem value="200000">AED 200,000</SelectItem>
                      <SelectItem value="300000">AED 300,000</SelectItem>
                      <SelectItem value="400000">AED 400,000</SelectItem>
                      <SelectItem value="500000">AED 500,000</SelectItem>
                      <SelectItem value="600000">AED 600,000</SelectItem>
                      <SelectItem value="700000">AED 700,000</SelectItem>
                      <SelectItem value="800000">AED 800,000</SelectItem>
                      <SelectItem value="900000">AED 900,000</SelectItem>
                      <SelectItem value="1000000">AED 1,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Developers */}
                <div className="hidden md:block">
                  <Select>
                    <SelectTrigger className="w-full gap-10 font-semibold">
                      <SelectValue placeholder="Developers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Developer 1">Developer 1</SelectItem>
                      <SelectItem value="Developer 2">Developer 2</SelectItem>
                      <SelectItem value="Developer 3">Developer 3</SelectItem>
                      <SelectItem value="Developer 4">Developer 4</SelectItem>
                      <SelectItem value="Developer 5">Developer 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="block md:hidden">
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    variant="outline"
                    className="text-lg font-normal rounded-full inline-flex md:hidden"
                  >
                    More <ChevronDown />{" "}
                  </Button>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {cardData.map((card) => (
                  <ProductCard
                    key={card.id}
                    card={card}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden fixed bottom-0 z-50 px-4 w-full bg-white h-[78px] flex items-center justify-center">
        {isMapView ? (
          <Button
            onClick={() => setIsMapView(!isMapView)}
            className="bg-primary w-full"
          >
            <HiViewList /> View property list
          </Button>
        ) : (
          <Button
            onClick={() => setIsMapView(!isMapView)}
            className="bg-primary w-full"
          >
            <MapIcon /> View Map
          </Button>
        )}
      </div>
      {isOpen && (
        <FilterDrawer
          side="right"
          open={isOpen}
          setOpen={setIsOpen}
        >
          <SearchFilterContent setOpen={setIsOpen} />
        </FilterDrawer>
      )}
    </div>
  );
};

export default MapViewPage;

{
  /*  <APIProvider apiKey={"AIzaSyCfO1n7mN9q1mXyLQeO1aM5p8qN5QKd2F8"}>
          <Map
            className="w-full h-full"
            defaultCenter={{ lat: 25.276987, lng: 55.296249 }}
            defaultZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
        </APIProvider> */
}
