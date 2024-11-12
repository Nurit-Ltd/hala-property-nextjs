import { propertyItems } from "@/data/propertyItems";
import Image from "next/image";


const FigureAndLocation = () => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-none md:flex  items-center gap-x-[10px] gap-y-2 md:gap-x-6 md:gap-y-6">
      {propertyItems.map((item, index) => {
        return (
          <div key={index} className="flex items-start gap-[5px] md:gap-3">
            <div className="w-6 h-6 md:w-[30px] md:h-[30px] bg-grey100 rounded-full flex items-center justify-center">
            <Image src={item.icon} alt={item.label} className="" />
            </div>
            <div className="md:space-y-[2px]">
              <h4 className="text-sm md:text-base font-medium md:font-semibold text-grey700">{item.value}</h4>
              <h5 className="text-[10px] md:text-sm text-grey600">{item.label}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FigureAndLocation;
