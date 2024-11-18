"use client";
import FilterDrawer from "@/components/shared/FilterDrawer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import SearchFilterContent from "./SearchFilterContent";

const SearchFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white py-1 px-2 lg:p-6 -mt-[22.5px] lg:-mt-[2.90625rem]  rounded-[100px] flex items-center justify-between md:justify-start  2xl:justify-between gap-4 2xl:gap-1 border shadow-md border-[#CBD5E0] lg:flex-wrap ">
      {/* Property type */}
      <div>
        <Select>
          <SelectTrigger className="w-full lg:w-[230px] gap-4 font-semibold hover:bg-primary/5 hover:text-primary   hover:border-primary transition-all">
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
          <SelectTrigger className="w-full lg:w-[230px] gap-4 font-semibold hover:bg-primary/5 hover:text-primary   hover:border-primary transition-all">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Dubai">Dubai</SelectItem>
            <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
            <SelectItem value="Sharjah">Sharjah</SelectItem>
            <SelectItem value="Ajman">Ajman</SelectItem>
            <SelectItem value="Umm Al Quwain">Umm Al Quwain</SelectItem>
            <SelectItem value="Ras Al Khaimah">Ras Al Khaimah</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* price */}
      <div className="hidden md:block">
        <Select>
          <SelectTrigger className="w-full lg:w-[230px] gap-4 font-semibold hover:bg-primary/5 hover:text-primary   hover:border-primary transition-all">
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
          <SelectTrigger className="w-full lg:w-[230px] gap-4 font-semibold hover:bg-primary/5 hover:text-primary   hover:border-primary transition-all">
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

      {/* buttons */}

      <div className="flex items-center gap-1 lg:gap-4">
        <Button onClick={() => setIsOpen(!isOpen)} variant="outline" className="text-lg font-normal rounded-full inline-flex md:hidden">
          More <ChevronDown />{" "}
        </Button>
        <Button variant="outline" className="text-[#687588] border-none rounded-full hidden md:inline-flex">
          Clear filter <MdClose />{" "}
        </Button>
        <Button className="bg-primary text-white rounded-full hidden md:inline-flex">
          <LuSearch />
          Search
        </Button>
      </div>

      {isOpen && (
        <FilterDrawer side="right" open={isOpen} setOpen={setIsOpen}>
          <SearchFilterContent setOpen={setIsOpen} />
        </FilterDrawer>
      )}
    </div>
  );
};

export default SearchFilter;
