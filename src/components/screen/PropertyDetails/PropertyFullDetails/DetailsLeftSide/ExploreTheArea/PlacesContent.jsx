import { placeData } from "@/data/placeDistanceData";
import { IoCartOutline } from "react-icons/io5";

const PlacesContent = () => {
  return (
    <div className="px-6">
      {placeData.map((school, index) => (
        <div key={index}>
          <div className="flex items-center gap-4">
            <IoCartOutline size={24} className="text-grey700" />
            <div className="space-y-[2px]">
              <h5 className="text-sm font-semibold text-grey700">
                {school.name}
              </h5>
              <div className="flex items-center">
                <h5 className="text-sm text-grey700">{school.location}</h5>
                <div className="w-[1px] h-[14px] bg-grey500 mx-[6px]"></div>
                <h5 className="text-sm text-grey700">{school.distance}</h5>
              </div>
            </div>
          </div>
          {/* Divider between schools, except for the last item */}
          {index <placeData.length - 1 && (
            <div className="w-full h-[1px] bg-grey300 my-4"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlacesContent;
