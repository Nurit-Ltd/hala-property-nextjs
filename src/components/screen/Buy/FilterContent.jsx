import { Checkbox } from "@/components/ui/checkbox";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterContent = ({ setOpen }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-2 px-3 pb-4 border-b border-gray-200">
        <h5 className="font-bold">Filters</h5>
        <IoMdClose
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <div>
          <div className="flex items-center justify-between gap-2 py-1 border">
            <h5 className="font-bold">Property Type</h5>
            <MdKeyboardArrowDown />
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="filter-check-texts"
                >
                  Apartment
                </label>
              </div>
              <span className="filter-check-texts">(987)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterContent;
