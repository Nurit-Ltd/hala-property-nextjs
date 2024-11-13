import { IoMdClose } from "react-icons/io";

const FilterContent = ({ setOpen }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-2 px-3 pb-4 border-b border-gray-200">
        <h5>Filters</h5>
        <IoMdClose
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FilterContent;
