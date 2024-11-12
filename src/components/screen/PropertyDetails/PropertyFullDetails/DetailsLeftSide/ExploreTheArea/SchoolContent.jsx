import { schoolData } from "@/data/schoolDistanceData";
import { IoSchoolOutline } from "react-icons/io5";

const SchoolContent = () => {
  return (
    <div className="px-3 md:px-6">
      {schoolData.map((school, index) => (
        <div key={index}>
          <div className="flex items-center gap-1.5 md:gap-4">
            <IoSchoolOutline className="text-grey700 text-xl md:text-2xl" />
            <div className="space-y-[0.8px] md:space-y-[2px]">
              <h5 className="text-xs md:text-sm font-semibold text-grey700">{school.name}</h5>
              <div className="flex items-center">
                <h5 className="text-[10px] md:text-sm text-grey700">{school.location}</h5>
                <div className="w-[1px] h-[10px] md:h-[14px] bg-grey500 mx-[6px]"></div>
                <h5 className="text-[10px] md:text-sm text-grey700">{school.distance}</h5>
              </div>
            </div>
          </div>
          {/* Divider between schools, except for the last item */}
          {index < schoolData.length - 1 && (
            <div className="w-full h-[1px] bg-grey300 my-2.5 md:my-4"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SchoolContent;
